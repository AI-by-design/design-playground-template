# Design Playground

A sandbox where designers can play with AI and code without the pressure of touching production.

You prompt an AI assistant in plain English. It builds a real component. You see it live. You change your mind. It updates. The design system stays coherent the whole time because the AI is reading from a contract you didn't have to write.

This is not a tool for shipping. It's a place to get comfortable.

---

## Who this is for

Designers, PMs, and anyone non-technical who's been hearing about Cursor and Claude Code and wants to try designing in code — without the risk of breaking their company's real codebase. You don't need to know how to code. You need a few minutes to install a couple of things.

---

## What you'll need (one-time setup)

If this is your first time touching code, here's what to install, in order. **Skip any you already have.**

### 1. Node.js

Node is what runs the app and the AI editors. Go to **[nodejs.org](https://nodejs.org)** → download the **LTS** version → run the installer. That's it.

To check it's installed, open Terminal (Mac: `Cmd+Space` → "Terminal") and type:
```
node --version
```
You should see something like `v20.10.0`. If you do, you're good.

### 2. An AI editor

Pick **one**. Both work with this playground.

- **[Claude Code](https://claude.com/claude-code)** — Anthropic's CLI/editor combo. The AI experience is the best of any tool right now.
- **[Cursor](https://cursor.com)** — A polished editor with built-in AI. Easier UI if you've never used a code editor before.

If you're not sure, pick **Cursor** for your first try. The interface is more familiar.

---

## Get started — one command

Open Terminal (Mac: `Cmd+Space` → "Terminal"). Paste this and press Enter:

```
npx degit AI-by-design/design-playground-template my-playground && cd my-playground && npm install && npm run dev
```

That's it. The command downloads the playground, installs everything, and starts the app — all in one go. Takes about 30 seconds.

When it's done, you'll see a line like `Local: http://localhost:3000`. **Click that link** (or open a browser tab to that URL). You'll see your live app.

Now **open the folder in your editor**:

- **Cursor or Claude Code → File → Open Folder** → select `my-playground` (it'll be in your home folder by default).
- Open the chat panel and start prompting.

That's the whole setup. Nothing here touches your company's code or anything else on your computer. It's a sandbox in your home folder. Delete the folder when you're done; nothing breaks.

> **Prefer to do it manually?** Download the repo as a ZIP from the green **Code** button → unzip it → open the folder in your editor → open the editor's terminal → run `npm install` and `npm run dev`. Same result, more clicks.

---

## Your first build

Open the chat panel in your editor — it's the AI assistant.

Try a prompt like:

> Build me a pricing card with three tiers — Starter, Pro, Enterprise. Use the existing button and card components.

The AI writes the code. The browser tab updates automatically. If you don't like something, just say so:

> Make the Pro tier stand out more.
>
> Use a softer shadow on all three cards.
>
> Add a "Most popular" badge to the middle one.

That's the loop. Prompt, see, refine.

**Why this works:** the AI is reading a file called `primitiv.contract.json` that describes your design system — the colors, the spacing, the components that already exist. It builds with those instead of inventing new ones from scratch. That's why your prototypes won't drift into five shades of grey.

---

## What's already inside

You don't need to do anything with this list. It's here so you know what's running under the hood.

| Thing | What it does |
|---|---|
| **Next.js** | The framework the app is built with |
| **Tailwind** | The styling system |
| **shadcn/ui** | 15 pre-built components (button, card, dialog, sheet, tabs, and more) |
| **Primitiv** | The design system contract that the AI reads |
| **Claude Code skills** | `/plan`, `/evaluate`, `/design-thinking`, `/test-debug`, `/new-project` |
| **Cursor rules** | UX, UI, motion, stack, and git rules pre-configured |

---

## Things that look like errors but aren't

| What you see | What's happening |
|---|---|
| `npm install` printing lots of text | Normal. It's downloading packages. |
| A few yellow warnings during install | Normal. They're not errors. |
| Terminal seems frozen | Wait. Some installs take a minute. |
| "Port 3000 already in use" when running `npm run dev` | You already have something running there. Stop it with `Ctrl+C` in the other terminal, then try again. |
| Red squiggly lines in code files | Normal until `npm install` finishes — the editor is checking types and packages aren't downloaded yet. |

---

## Save your work (optional)

If you want to keep what you build:

- **In Cursor or Claude Code**, use the built-in **Source Control** panel on the left (looks like a branching arrow). Type a short message, click **Commit**.
- Or just keep the folder on your computer. Everything you build is saved in real-time as files.

To share your version with someone else, you can push it to a new GitHub repo. The editor will walk you through it the first time.

---

## No-install alternative: GitHub Codespaces

If you'd rather not install Node or an editor locally, you can run this whole thing in your browser via **GitHub Codespaces**:

1. Click **Use this template → Open in a codespace** at the top of this page.
2. Wait ~3 minutes the first time for setup.
3. Once the editor loads in your browser, you'll need to **sign into GitHub Copilot** (free tier available, 50 chat messages/month) to use the AI panel. Open the chat panel and click "Sign in."
4. Run `bun dev` in the terminal — the preview opens automatically.

This is the slower path but requires zero installs on your computer. Use it if you just want to peek.

---

## Glossary (skip if you already know)

- **Node.js** — the runtime that runs JavaScript outside the browser. The thing the playground needs to run.
- **npm** — Node's package installer. Comes with Node.
- **Terminal** — the panel where you type commands. Most editors have one built in.
- **Localhost** — your own computer, acting as a tiny server. `http://localhost:3000` is the app running on your machine, only visible to you.
- **MCP** — the connection between the AI and your design system. Pre-configured; you don't touch it.
- **Codespace** — a coding environment that runs in your browser, on GitHub's servers.

---

Build with [Primitiv](https://github.com/AI-by-design/primitiv) and [Design-build workflow](https://github.com/AI-by-design/Design-workflow).
