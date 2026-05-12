@AGENTS.md

# Design Playground

This is a design-system-aware playground for building UI components with AI.
It runs **Next.js 15 + TypeScript + Tailwind v4 + shadcn/ui**, managed with **Bun** and formatted with **Biome**.

## Stack

- `src/app/` — Next.js App Router pages and layouts
- `src/components/ui/` — shadcn/ui primitives (button, card, dialog, sheet, tabs, etc.)
- `src/components/` — your own components go here
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `primitiv.contract.json` — generated design system contract (run `primitiv build` to refresh)

## Commands

```bash
bun dev          # start dev server on :3000
bun build        # production build
bun lint         # Biome lint
bun fmt          # Biome format
primitiv build   # rebuild the design system contract
primitiv verify  # check for token drift
```

## Skills available

- `/plan` — plan a UI feature before building
- `/design-thinking` — explore UX options before committing to code
- `/evaluate` — grade a component against design system rules
- `/test-debug` — debug a UI problem systematically
- `/new-project` — scaffold a new feature or page

## Design system contract

`primitiv.contract.json` is the source of truth for tokens, components, and inferred rules.
The Primitiv MCP server (`.mcp.json`) exposes it to Claude Code — agents read the contract
before generating components so they use what already exists instead of fabricating new styles.

**Never hardcode color values, spacing, or font sizes.** Use CSS custom properties from the contract
or Tailwind classes that map to them. If you're unsure what's available, ask — the contract has it.

## Adding components

Prefer extending existing shadcn primitives in `src/components/ui/` over building from scratch.
Keep new components in `src/components/` with a matching story file if you're adding Storybook later.
