# Evaluate
**Mode: EVALUATE. Audit built output for correctness, craft, and brand alignment. Surface findings before fixing anything.**

Run this after any build part is functionally complete — always before shipping, and after each `/build-component` if you have [Primitiv](https://github.com/AI-by-design/primitiv) installed. Do not run on work-in-progress. When a Primitiv contract is present, Layer 1 checks validate tokens and component names against the contract (see Trigger Logic below).

---

## Trigger Logic

```
primitiv.contract.json exists in project root?
  → YES: evaluate against contract + UX/UI principles (Layers 1–3)
  → NO:  evaluate against /design-thinking output in CLAUDE.md (Layers 2–3 only)
```

If neither a contract nor a CLAUDE.md brief exists, stop and say: *"I need either a Primitiv contract or a design brief before evaluating. Run `primitiv build` to generate the contract, or run `/design-thinking` to create the brief."*

---

## Before Evaluating: Load Context

Read these before doing anything:

1. `primitiv.contract.json` (if it exists) → tokens, components, inferred rules, governance decisions
2. `CLAUDE.md` → the Product Design Brief — especially **Emotional Core**, **Brand Identity**, and **Anti-values**
3. `.cursor/rules/ui-design.mdc` → the Project Aesthetic section (appended after `/design-thinking`)

State explicitly at the start:
- Contract present: **yes / no**
- Brand brief present: **yes / no**
- Evaluation mode: **contract + brief / brief only**

---

## Layer 1: Automated Checks
*Hard pass/fail. These are not judgment calls — they are thresholds.*

### Tokens (only if contract exists)
- [ ] All color values use tokens from the contract — no hardcoded hex/rgb values
- [ ] All spacing values use tokens from the contract — no arbitrary numbers
- [ ] Component names match the contract's component registry
- [ ] No token names from outside the contract namespace

### Accessibility
- [ ] Body text contrast ≥ 4.5:1 (WCAG AA)
- [ ] Large text contrast ≥ 3:1 (18px+ or 14px bold)
- [ ] Touch targets ≥ 44×44px on all mobile interactive elements
- [ ] Every icon-only button has `aria-label`
- [ ] All form inputs associated with visible labels via `htmlFor`/`id`
- [ ] Color is not the only conveyor of meaning (always paired with text, icon, or pattern)

### Spacing
- [ ] All spacing values are multiples of 4 or 8 — no arbitrary values
- [ ] Internal spacing ≤ external spacing on every component (elements feel connected to their container)

### Typography
- [ ] Line height 1.4–1.6× on body, 1.1–1.3× on headings
- [ ] Font sizes from a defined scale — no random values
- [ ] `tabular-nums` on every numeric and data column
- [ ] `text-balance` on headings
- [ ] `text-pretty` on body text
- [ ] No `letter-spacing` modifications on non-ALL-CAPS text

### Color
- [ ] Accent color does not exceed ~10% of the view (60-30-10 rule)
- [ ] No more than one competing accent per view
- [ ] No gradients (unless explicitly in the brief)
- [ ] No glow effects as affordances

---

## Layer 2: UX/UI Criteria
*These are defined in the existing skills. Do not rewrite them — reference and apply.*

Run the **Self-Verification Checklist** from `.cursor/rules/ui-design.mdc` and the **Self-Verification Checklist** from `.cursor/rules/ux-design.mdc`.

Key vulnerability moments to check (from ux-design.mdc):
- [ ] First-time experience has orientation and a clear first action
- [ ] Every empty state has one specific CTA — not "no data found"
- [ ] Every error state answers: what happened + why + what to do next
- [ ] No silent loading — feedback within 100ms of any action
- [ ] No dead ends — every success state has a next step
- [ ] No premature commitment — value shown before sign-up or payment

Key component completeness check (from ui-design.mdc):
- [ ] Every interactive component has all states: default, hover, focus, active, disabled, loading, empty, error
- [ ] Every conditional render wrapped in `AnimatePresence`
- [ ] `prefers-reduced-motion` handled via `useReducedMotion()`
- [ ] One primary button per screen section

---

## Layer 3: LLM Judgment
*Not pass/fail — assessed against the brand brief. Cite evidence, don't assert.*

### Brand Alignment
Using the Emotional Core from CLAUDE.md:

```
BEFORE state the product resolves: [from brief]
→ Does the UI communicate relief from that state? What specifically creates or breaks it?

DURING character the product must sustain: [from brief]
→ Does every interaction sustain that tone? Where does it drift?

AFTER feeling the product should leave: [from brief]
→ Does the completion/result state feel like the brand promise? Does it land?

ANTI-VALUES to avoid: [from brief]
→ Does anything trigger these? Name it specifically.
```

### Visual Hierarchy
- Is the most important thing the first thing the eye lands on?
- Is reading order obvious in a 3-second scan?
- Is there one hero element per view — or does everything compete?
- Does whitespace create separation and grouping, or is it arbitrary?

### Originality
- Does this look intentional or could it be any generic AI output?
- Are the Visual Signatures from the brand brief actually present in the UI?
- Does the aesthetic direction feel *argued* (derived from the brief) or *chosen* (picked arbitrarily)?

---

## Finding Surface Protocol

**Do not fix anything immediately.** Present findings first.

Format your findings as:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EVALUATION RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluation mode: [contract + brief / brief only]

🔴 BLOCKERS — must fix before passing
  - [Issue]: [File:line or component] → [What's wrong and what standard it fails]

🟡 WARNINGS — flag, don't block
  - [Issue]: [Where] → [What the brand brief says it should be]

🟢 PASSING
  - [What's working well — be specific]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Then say:

*"I found [count] blocker(s) and [count] warning(s). Here's how I'll fix the blockers: [brief plan, one line per fix]. Shall I proceed?"*

Wait for confirmation. Then fix blockers only — do not touch warnings without being asked.

---

## The Fix Loop

```
1. Surface findings → user confirms fix plan
2. Fix blockers
3. Re-evaluate Layer 1 and the specific Layer 2/3 checks that failed
4. If new blockers surface: fix and re-evaluate
5. Stop when all blockers pass
6. Present final state — leave warnings visible for the user to decide
```

**Token cost rule:** iterate until blockers pass, not until perfection. Warnings are opinions. Blockers are standards.

---

## Blockers vs Warnings

| Category | Verdict |
|---|---|
| Layer 1 failures (token, a11y, spacing, typography, color) | **Blocker** |
| Layer 2 failures (UX vulnerability moments, component states, dead ends) | **Blocker** |
| Layer 3 findings (brand alignment, originality, hierarchy) | **Warning** |

Exception: if a Layer 3 finding directly triggers an Anti-value from CLAUDE.md, escalate it to a **Blocker**.

---

## After Evaluation Passes

When all blockers are resolved, output this handoff block exactly:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EVALUATION PASSED ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What just happened
- Layer 1 (tokens, a11y, spacing, type, color) — all checks passed
- Layer 2 (UX vulnerability moments, component states, dead ends) — all checks passed
- Layer 3 (brand alignment, hierarchy, originality) — assessed below

Open warnings (your call)
  - [List remaining Layer 3 warnings, or "none"]

What's next
- If this is the last build part: you're ready to ship.
- If more build parts remain: return to PLAN.md and say "let's build" to start the next part.
- If something breaks at any point: run `/test-debug` to isolate and fix.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
