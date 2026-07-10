Add-Type -AssemblyName System.Drawing

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$outDir = Join-Path $root "wireframes"

$scenes = @(
  @{
    File = "01-loading.png"
    Title = "Loading"
    Items = @("Product logo", "Loading percent", "Particle field", "Skip option")
  },
  @{
    File = "02-hero.png"
    Title = "Hero"
    Items = @("Name + role", "Tagline", "Begin Journey CTA", "Social links", "Mountains + clouds")
  },
  @{
    File = "03-about.png"
    Title = "About Forest"
    Items = @("Wooden signboards", "Short bio", "Current focus", "Interests", "Character path")
  },
  @{
    File = "04-education.png"
    Title = "University"
    Items = @("Campus background", "Timeline", "Degree panel", "Books", "Certificate")
  },
  @{
    File = "05-skills.png"
    Title = "Skills Forest"
    Items = @("Skill crystals", "Category filter", "Skill detail panel", "Related projects", "Character")
  },
  @{
    File = "06-projects.png"
    Title = "Project Laboratory"
    Items = @("Project rooms", "Project preview", "Architecture panel", "GitHub + demo", "Lessons learned")
  },
  @{
    File = "07-ai-lab.png"
    Title = "AI Research Center"
    Items = @("AI model cards", "Roadmap labels", "Robot assistant", "Experiment panels", "Character")
  },
  @{
    File = "08-engineering.png"
    Title = "Engineering Room"
    Items = @("System diagram", "API flow", "Database schema", "Testing", "Deployment pipeline")
  },
  @{
    File = "09-contact.png"
    Title = "Contact Camp"
    Items = @("Resume CTA", "Contact form", "Social links", "Availability", "Campfire + stars")
  }
)

function Draw-Text {
  param (
    [System.Drawing.Graphics] $Graphics,
    [string] $Text,
    [int] $X,
    [int] $Y,
    [int] $Size = 18,
    [string] $Color = "#111827",
    [string] $Style = "Regular"
  )

  $fontStyle = [System.Drawing.FontStyle]::Regular
  if ($Style -eq "Bold") {
    $fontStyle = [System.Drawing.FontStyle]::Bold
  }

  $font = New-Object System.Drawing.Font("Arial", $Size, $fontStyle)
  $brush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml($Color))
  $Graphics.DrawString($Text, $font, $brush, $X, $Y)
  $font.Dispose()
  $brush.Dispose()
}

function Draw-Box {
  param (
    [System.Drawing.Graphics] $Graphics,
    [int] $X,
    [int] $Y,
    [int] $Width,
    [int] $Height,
    [string] $Label
  )

  $pen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml("#64748B"), 2)
  $brush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#F8FAFC"))
  $Graphics.FillRectangle($brush, $X, $Y, $Width, $Height)
  $Graphics.DrawRectangle($pen, $X, $Y, $Width, $Height)
  Draw-Text $Graphics $Label ($X + 14) ($Y + 14) 14 "#334155" "Bold"
  $pen.Dispose()
  $brush.Dispose()
}

foreach ($scene in $scenes) {
  $bitmap = New-Object System.Drawing.Bitmap(1280, 720)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml("#E2E8F0"))

  Draw-Text $graphics $scene.Title 48 32 30 "#0F172A" "Bold"
  Draw-Text $graphics "Low-fidelity layout wireframe" 50 72 14 "#64748B" "Regular"

  Draw-Box $graphics 48 112 1184 64 "Navigation / scene progress"
  Draw-Box $graphics 48 206 330 398 "Character / path anchor"
  Draw-Box $graphics 410 206 430 150 $scene.Items[0]
  Draw-Box $graphics 410 386 430 218 $scene.Items[1]
  Draw-Box $graphics 872 206 360 86 $scene.Items[2]
  Draw-Box $graphics 872 322 360 86 $scene.Items[3]
  Draw-Box $graphics 872 438 360 166 $scene.Items[4]
  Draw-Box $graphics 48 632 1184 40 "Background environment layers / parallax ground"

  $path = Join-Path $outDir $scene.File
  $bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose()
  $bitmap.Dispose()
}
