# Design Playground Template

A ready-to-use template for building UI components with AI — without needing a local dev environment.

Open in GitHub Codespaces and start building in under 2 minutes. The design system contract is pre-wired so AI agents use what already exists instead of fabricating new styles.

## What's inside

- **Next.js 15** + TypeScript + Tailwind v4 + App Router
- **shadcn/ui** — 15 pre-installed primitives (button, card, dialog, sheet, tabs, and more)
- **Primitiv** — design system contract layer; agents read `primitiv.contract.json` before generating components
- **Forge skills** — `/plan`, `/design-thinking`, `/evaluate`, `/test-debug` Claude Code commands pre-loaded
- **Cursor rules** — UX, UI, motion, stack, and git rules pre-configured
- **Biome** — lint + format in one tool

## Quick start

### In GitHub Codespaces (recommended)

1. Click **Use this template** → **Open in a codespace**
2. Wait ~60s for the container to start and `primitiv build` to run
3. Run `bun dev` — the preview opens automatically on port 3000
4. Start building with Claude Code or Cursor

### Locally

```bash
git clone <your-repo>
cd <your-repo>
bun install
primitiv build
bun dev
```

## How AI works in this template

`primitiv.contract.json` is generated from your `src/` folder and exposes your design tokens, components, and inferred rules via an MCP server (`.mcp.json`).

Claude Code and Cursor read this contract before generating code — so they reference `bg-primary` instead of `bg-[#6366f1]`, and extend `<Button>` instead of building a new one from scratch.

To rebuild the contract after adding new tokens or components:

```bash
primitiv build
```

To check for drift (hardcoded values that bypass the contract):

```bash
primitiv verify
```

## Available skills (Claude Code)

| Command | What it does |
|---|---|
| `/plan` | Plan a feature before writing code |
| `/design-thinking` | Explore UX options before committing |
| `/evaluate` | Grade a component against design system rules |
| `/test-debug` | Debug a UI problem systematically |
| `/new-project` | Scaffold a new feature or page |

## Stack

| Tool | Version |
|---|---|
| Next.js | 15 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| shadcn/ui | latest |
| Biome | latest |
| Bun | 1.x |
| Primitiv | latest |

---

Part of the [Primitiv](https://github.com/AI-by-design/primitiv) suite — the design system contract layer for teams where designers ship code directly.
