# Design Playground

A ready-to-use environment for designing with AI in your browser. No installs. No setup. No terminal commands to memorize.

If you've ever wanted to prototype a UI with Claude or Copilot but got stuck on "how do I run this on my computer?" — this is for you.

## What this is, in one paragraph

This is a template you copy with one click. It opens in your browser as a real coding environment (called a **Codespace**) with everything pre-installed: a working app, a design system, and an AI assistant that already understands your design system. You talk to the AI in plain English ("build me a pricing card"), it generates the component, and you see it live in the preview window. That's the whole loop.

You don't need to know how to code. You need to know what you want to build.

---

## Get started — what to actually click

### Step 1 — Make your copy

At the top of this page, click the green **Use this template** button → **Open in a codespace**.

GitHub will start building your personal copy. A new browser tab opens.

### Step 2 — Wait for the setup (~60–90 seconds)

You'll see a screen that looks like a code editor. **Don't panic if nothing seems to happen** — the setup is running in the background. Things you'll see:

- A bottom panel called **Terminal** opens. Lots of text scrolls past. This is normal.
- A few red error toasts may pop up in the bottom-right corner — most commonly something about **Biome** or **server initialization failed**. **Ignore them.** They appear because the editor is faster than the setup. They go away on their own within a few seconds.
- The bottom panel will eventually quiet down and show a prompt like:
  ```
  @yourname → /workspaces/design-playground-template (main) $
  ```
  When you see that idle prompt, the setup is done.

### Step 3 — Start the app

In the terminal at the bottom, type this and press Enter:

```
bun dev
```

After a few seconds, a small popup appears bottom-right: **"Your application running on port 3000 is available."** Click **Open in Browser**. A new tab opens — that's your live app.

You now have a real, running app that you can edit by talking to AI.

---

## Your first build (the fun part)

Open the **chat panel** on the right side of the editor (looks like a chat bubble icon). It's the AI assistant.

Try saying something like:

> Build me a pricing card with three tiers — Starter, Pro, Enterprise. Use the existing button and card components.

The AI will write the code, save it as a file, and the preview tab will update automatically. If you don't like something, just tell it — "make the Pro card stand out more" or "use a softer shadow."

**Why this works without you doing anything:**

This template already includes a **design system contract** — a file the AI reads before generating code. It knows what colors, spacing, and components already exist, so it uses them instead of inventing new ones. That's why your prototypes won't drift into 12 different shades of grey.

---

## What's already set up for you

You don't need to do anything with this list — it's just here so you know what's running under the hood when someone asks.

| Thing | What it does |
|---|---|
| **Next.js** | The framework the app is built with |
| **Tailwind** | The styling system |
| **shadcn/ui** | A set of pre-built components (button, card, dialog, etc.) — 15 of them, ready to use |
| **Primitiv** | The design system contract that the AI reads before generating code |
| **Claude Code / Cursor skills** | Pre-loaded commands like `/plan`, `/evaluate`, `/design-thinking` |

---

## Things that look like errors but aren't

| What you see | What's actually happening |
|---|---|
| Red toast: "biome client: couldn't create connection" | The code formatter loaded faster than the install. It fixes itself in ~1 second. |
| Red toast: "Server initialization failed" (Biome) | Same as above. |
| Terminal scrolling for ~60s | Setup is running. Be patient. |
| "Building codespace..." at the top | The very first time loads slower. Future visits are faster. |
| Port forwarding popups | Codespaces is connecting your running app to your browser. Click **Open in Browser** when it asks. |

If you ever feel stuck, close everything and re-open the Codespace from the GitHub page. Nothing breaks — your work is saved.

---

## What to do next

- **Talk to the AI** in the chat panel. Ask it to build pages, components, or even whole flows.
- **Edit by description**: "make this section feel more premium," "use more whitespace," "match the style of the rest of the app."
- **Use the slash commands**: type `/plan` in the chat to plan a feature before building, or `/evaluate` to check whether what you built fits the design system.
- **Save your work**: When you're happy with something, click the **Source Control** icon on the left (looks like a branching arrow), type a short message, and click **Commit & Sync**. Your changes are now saved to your repo on GitHub.

---

## Glossary (skip if you already know)

- **Codespace** — a complete coding environment that runs in your browser. You don't install anything on your computer.
- **Terminal** — the black/grey panel at the bottom where you type commands. You'll only need it a few times.
- **Port 3000** — where your running app lives. Codespaces makes it accessible via a special browser URL.
- **MCP** — the connection between the AI and your design system. You don't need to configure it; it's already set up.
- **Repo / Repository** — your project, stored on GitHub. Each "Use this template" gives you your own.

---

Part of the [Primitiv](https://github.com/AI-by-design/primitiv) suite — the design system contract layer for teams where designers ship code directly.
