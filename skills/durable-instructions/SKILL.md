---
name: durable-instructions
description: Make instructions survive long agent sessions. Use when an agent keeps forgetting a rule mid-task, drops constraints after context compaction, ignores guidelines written at the top of a prompt, or when writing a skill, system prompt, or CLAUDE.md that must stay in force. Also use when designing agent memory, instruction checklists, or long-context prompts that must be followed rather than merely read, or when a rule only says what not to do and needs a positive replacement.
allowed-tools: Read, Grep, Glob
license: MIT
---

# Durable Instructions

Instructions are not remembered; they are re-read or they are gone. This skill turns research on agent memory, context position, instruction density, and if-then planning into seven authoring rules that keep a rule in force at the moment it matters.

## Contract

1. Triggers live only in the frontmatter description.
2. Put each rule where the decision happens.
3. Make every rule observable.
4. Restate briefly at section boundaries.
5. Keep an external plain-text anchor.
6. Keep the active rule set short.
7. Pair every prohibition with a positive action and its cue.

## The seven rules

### 1. Trigger contract

Write invocation conditions in the frontmatter description, in third person, using the symptom a user actually notices: "keeps forgetting a rule", "drops constraints", "ignores guidelines". Do not add a "When to use" section to the body, and do not summarize the workflow in the description. A workflow summary makes agents act on the description and skip the body.

### 2. Point-of-decision placement

Place a constraint immediately before the step it governs. A rule stated only in a preamble competes with everything that follows it; relevance in the middle of a long context is reliably under-used, and early instructions win disproportionate attention. If a rule governs scoring, put it in the scoring step, not in an intro.

### 3. Verifiable form

State what passing looks like. "Evidence is a file:line or a screenshot region" can be checked; "be careful with evidence" cannot. Separate the action from the assertion, and give each rule a pass/fail condition. An agent can repeat an instruction while violating it, so only observable checks count as compliance.

### 4. Spaced restatement

Repeat a three-to-five line contract at the boundaries where a long task changes phase. One dense list at the top is cramming; short restatements at decision points are retrieval practice. Each restatement costs tokens, so keep it short and only restate rules that govern the upcoming phase.

### 5. Grep-able anchor

Keep the authoritative constraints in a plain-text file that can be re-read on demand, and point to it explicitly. Assume compaction will discard anything unwritten, and assume a summary preserves the task but not the side constraints. A short append-only checklist plus a search tool outperforms lossy summarization in long-horizon recall.

### 6. Rule budget

Cut soft preferences and duplicates before adding new rules. Adherence falls as instruction count rises, and the best models still miss roughly a third of a very large instruction set. Seven enforced rules beat twenty aspirational ones.

### 7. Positive replacement

Never ship a prohibition alone. Write `When <cue>, do <action>. Pass when <check>.` If-then plans link a situation directly to a response; a bare "don't" leaves the agent with no default behavior once the preamble fades, and negated plans can strengthen the unwanted response. "Do not use a gradient hero" has no default. "When choosing a hero surface, show the product artifact on the page background. Pass when a visitor could name the product from the visual alone" has a cue, an action, and a check. If a rule cannot take this form, it is a preference — cut it. See `references/positive-framing.md`.

## Workflow

1. Read the contract above.
2. Identify the decision points in the work: where the agent will choose, write, or judge.
3. Select the matching template from `references/authoring-patterns.md`.
4. Convert every prohibition into a cue → action → check pair using `references/positive-framing.md`. If a rule has no positive action, cut it rather than adding another "don't".
5. Place each rule at its decision point, in verifiable form.
6. Name the grep-able anchor file if one exists.
7. Run the probes in `references/evaluation.md` and report pass/fail with evidence.

## Limits

This skill improves the odds that a rule is followed; it cannot force a model to obey. Hard guarantees require external enforcement, which is deliberately out of scope here. Research is from 2023-2026; revisit the findings when context managers or model architectures change.

## Files

- `references/research-evidence.md` — sources, findings, rule mapping.
- `references/authoring-patterns.md` — before/after templates.
- `references/positive-framing.md` — turning prohibitions into cue → action → check rules.
- `references/evaluation.md` — probes and pass criteria.
- `evals/evals.json` — trigger and behavioral tests.
- `evals/validate_structure.py` — mechanical structure check.
