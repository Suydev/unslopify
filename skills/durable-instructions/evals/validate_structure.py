#!/usr/bin/env python3
"""Mechanical checks for durable-instructions structure."""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
text = (ROOT / "SKILL.md").read_text()
front = text.split("---", 2)[1]
errors = []

description = re.search(r"^description:\s*(.+)$", front, re.M)
if not description:
    errors.append("missing description")
else:
    low = description.group(1).lower()
    for phrase in ("keeps forgetting", "drops constraints", "skill", "claude.md"):
        if phrase not in low:
            errors.append(f"description missing symptom phrase: {phrase}")
    if low.startswith("to "):
        errors.append("description must be third person")

for heading in ("## Contract", "## The seven rules", "## Workflow", "## Limits", "## Files"):
    if heading not in text:
        errors.append(f"missing heading: {heading}")

for rule in (
    "### 1. Trigger contract",
    "### 2. Point-of-decision placement",
    "### 3. Verifiable form",
    "### 4. Spaced restatement",
    "### 5. Grep-able anchor",
    "### 6. Rule budget",
    "### 7. Positive replacement",
):
    if rule not in text:
        errors.append(f"missing rule: {rule}")

if "## When to use" in text:
    errors.append("body must not contain a Triggers/When-to-use section")
words = len(text.split())
if words >= 1500:
    errors.append(f"SKILL.md over budget: {words} words")

for name in ("research-evidence.md", "authoring-patterns.md", "positive-framing.md", "evaluation.md"):
    if not (ROOT / "references" / name).exists():
        errors.append(f"missing reference: {name}")

try:
    evals_data = json.loads((ROOT / "evals" / "evals.json").read_text())
except (OSError, ValueError) as exc:
    errors.append(f"evals.json unreadable or malformed: {exc}")
else:
    try:
        eval_count = len(evals_data["evals"])
    except (KeyError, TypeError) as exc:
        errors.append(f"evals.json missing evals list: {exc}")
    else:
        if eval_count != 10:
            errors.append(f"evals.json expected 10 evals, found {eval_count}")

if errors:
    print("FAIL")
    print("\n".join(errors))
    sys.exit(1)
print(f"PASS: {words} words, all structure checks met")
