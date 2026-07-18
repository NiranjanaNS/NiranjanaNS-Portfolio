import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const sourcePath = resolve(root, "docs", "02-PRD.md");
const outputPath = resolve(root, "docs", "NiranjanaNS_Portfolio_PRD_v1.pdf");

const markdown = readFileSync(sourcePath, "utf8");

const page = {
  width: 595.28,
  height: 841.89,
  marginX: 56,
  marginTop: 58,
  marginBottom: 54,
};

const styles = {
  title: { font: "F2", size: 26, leading: 32, before: 0, after: 18 },
  h2: { font: "F2", size: 16, leading: 22, before: 18, after: 8 },
  h3: { font: "F2", size: 12, leading: 17, before: 11, after: 4 },
  body: { font: "F1", size: 10.5, leading: 15, before: 4, after: 4 },
  meta: { font: "F1", size: 9, leading: 13, before: 0, after: 14 },
};

const lines = [];
lines.push({ text: "Product Requirements Document", style: "meta" });
lines.push({ text: "NiranjanaNS Portfolio", style: "title" });
lines.push({ text: "Version 1.0 | 2026-07-08 | Product Discovery and Design", style: "meta" });

for (const rawLine of markdown.split(/\r?\n/)) {
  const line = rawLine.trim();

  if (!line) {
    lines.push({ text: "", style: "body" });
    continue;
  }

  if (line.startsWith("# ")) {
    continue;
  }

  if (line.startsWith("## ")) {
    lines.push({ text: line.slice(3), style: "h2" });
    continue;
  }

  if (line.startsWith("### ")) {
    lines.push({ text: line.slice(4), style: "h3" });
    continue;
  }

  if (line.startsWith("- ")) {
    lines.push({ text: `- ${cleanInline(line.slice(2))}`, style: "body", indent: 14 });
    continue;
  }

  const ordered = line.match(/^(\d+)\.\s+(.*)$/);
  if (ordered) {
    lines.push({ text: `${ordered[1]}. ${cleanInline(ordered[2])}`, style: "body", indent: 14 });
    continue;
  }

  lines.push({ text: cleanInline(line), style: "body" });
}

const pages = paginate(lines);
const pdf = buildPdf(pages);
writeFileSync(outputPath, pdf);

function cleanInline(value) {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1");
}

function paginate(blocks) {
  const printableWidth = page.width - page.marginX * 2;
  const allPages = [];
  let current = [];
  let y = page.height - page.marginTop;

  for (const block of blocks) {
    const style = styles[block.style];
    const wrapped = block.text
      ? wrapText(block.text, printableWidth - (block.indent ?? 0), style.size)
      : [""];
    const height = style.before + wrapped.length * style.leading + style.after;

    if (y - height < page.marginBottom && current.length > 0) {
      allPages.push(current);
      current = [];
      y = page.height - page.marginTop;
    }

    current.push({ ...block, wrapped });
    y -= height;
  }

  if (current.length > 0) {
    allPages.push(current);
  }

  return allPages;
}

function wrapText(text, maxWidth, fontSize) {
  const words = text.split(/\s+/);
  const rows = [];
  let row = "";

  for (const word of words) {
    const next = row ? `${row} ${word}` : word;
    if (measure(next, fontSize) <= maxWidth || !row) {
      row = next;
    } else {
      rows.push(row);
      row = word;
    }
  }

  if (row) {
    rows.push(row);
  }

  return rows;
}

function measure(text, fontSize) {
  return text.length * fontSize * 0.52;
}

function buildPdf(renderPages) {
  const objects = [];
  const addObject = (body) => {
    objects.push(body);
    return objects.length;
  };

  const catalogId = addObject("<< /Type /Catalog /Pages 2 0 R >>");
  const pagesId = addObject("");
  const fontRegularId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const fontBoldId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const pageIds = [];

  for (const renderPage of renderPages) {
    const content = renderPageContent(renderPage);
    const contentId = addObject(
      `<< /Length ${Buffer.byteLength(content, "utf8")} >>\nstream\n${content}\nendstream`,
    );
    const pageId = addObject(
      [
        "<< /Type /Page",
        `/Parent ${pagesId} 0 R`,
        `/MediaBox [0 0 ${page.width} ${page.height}]`,
        `/Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> >>`,
        `/Contents ${contentId} 0 R`,
        ">>",
      ].join("\n"),
    );
    pageIds.push(pageId);
  }

  objects[pagesId - 1] = `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds
    .map((id) => `${id} 0 R`)
    .join(" ")}] >>`;

  const parts = ["%PDF-1.4\n"];
  const offsets = [0];

  objects.forEach((body, index) => {
    offsets.push(Buffer.byteLength(parts.join(""), "utf8"));
    parts.push(`${index + 1} 0 obj\n${body}\nendobj\n`);
  });

  const xrefOffset = Buffer.byteLength(parts.join(""), "utf8");
  parts.push(`xref\n0 ${objects.length + 1}\n`);
  parts.push("0000000000 65535 f \n");

  for (let index = 1; index < offsets.length; index += 1) {
    parts.push(`${String(offsets[index]).padStart(10, "0")} 00000 n \n`);
  }

  parts.push(
    [
      "trailer",
      `<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>`,
      "startxref",
      String(xrefOffset),
      "%%EOF",
    ].join("\n"),
  );

  return Buffer.from(parts.join(""), "utf8");
}

function renderPageContent(blocks) {
  const commands = ["BT", "1 0 0 1 0 0 Tm"];
  let y = page.height - page.marginTop;

  for (const block of blocks) {
    const style = styles[block.style];
    const x = page.marginX + (block.indent ?? 0);
    y -= style.before;
    commands.push(`/${style.font} ${style.size} Tf`);
    commands.push(`${x} ${y} Td`);

    for (const line of block.wrapped) {
      if (line) {
        commands.push(`(${escapePdfText(line)}) Tj`);
      }
      commands.push(`0 -${style.leading} Td`);
      y -= style.leading;
    }

    y -= style.after;
    commands.push(`${-x} ${-y} Td`);
  }

  commands.push("ET");
  return commands.join("\n");
}

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}
