import { Badge, Button, Card } from "@niranjanans/ui";

const foundationItems = [
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "pnpm workspace",
  "Shared UI package",
  "NestJS API planned",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-text">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col justify-center gap-8">
        <Badge>Engineering Foundation</Badge>
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-semibold leading-tight md:text-6xl">
            NiranjanaNS Engineering Journey
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            The monorepo foundation is ready. The next milestone is the scrolling engine that will
            power the cinematic portfolio experience.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button>Foundation Ready</Button>
          <Button variant="secondary">View Architecture</Button>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {foundationItems.map((item) => (
            <Card key={item}>
              <span className="font-medium">{item}</span>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
