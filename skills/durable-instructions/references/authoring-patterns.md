# Authoring patterns

Each pattern shows the failure form and the replacement. Copy the structure, not the subject matter.

## Prompt: soft preamble to decision-point rule

Before:

```text
Be thorough and follow all our rules when reviewing code.
... 3,000 tokens of task description ...
Review the diff.
```

After:

```text
Review the diff.

For each changed file, list evidence as path:line. A finding without a path:line
does not count. Output the list before any summary.
```

The observable check sits next to the action.

## SKILL.md body: restated contract at phase boundary

Before:

```markdown
Always confirm tool output before reporting.
## Step 1: scan
...
## Step 2: score
...
```

After:

```markdown
## Step 1: scan
...

## Step 2: score
CONTRACT (score phase): confirm each candidate against source before counting it.
Evidence must be path:line or a screenshot region. Unconfirmed candidates are not counted.
...
```

## CLAUDE.md: vague preference to grep-able anchor

Before:

```markdown
Keep the API conventions in mind.
```

After:

```markdown
Read `docs/api-contract.md` before adding an endpoint. It is authoritative.
If it is not present, say so and stop; do not rely on recalled conventions.
```

## Checklist anchor

Use a plain-text file with one rule per line and a short header. Append rather than rewrite; search it with grep when the decision arrives. Never encode the only copy of a constraint inside a tool result or a summary.

```text
CONTRACT
- evidence: path:line or screenshot region
- confirm before scoring
- reload docs/api-contract.md when adding endpoints
```

## Prompt or skill rule: prohibition to positive replacement

Before:

```text
Don't make the hero generic. Avoid fake stats and never use a gradient background.
```

After:

```text
When choosing a hero, show the product artifact making the headline's claim.
Pass when a visitor could name the product from the visual alone.
When adding a number, give its conditions and source. Pass when the conditions are on screen.
```

Each "don't" became a cue, an action, and a check. Pass criteria live beside the decision, so they survive the loss of the preamble. See `positive-framing.md` for the full pattern.

## What to cut

- "Be careful", "be thorough", "follow best practices" — no observable check.
- Rules repeated three or more times in one file — restate at boundaries, not in place.
- Preferences that do not change a decision — they consume the rule budget.
