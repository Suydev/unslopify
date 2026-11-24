import assert from 'node:assert/strict';
import test from 'node:test';
import { askYesNo, parseSelection } from '../lib/setup.mjs';

test('parseSelection accepts empty, all, numbers, ids, and deduplicates', () => {
  const detected = ['claude', 'codex', 'cursor'];
  assert.deepEqual(parseSelection('', detected), detected);
  assert.deepEqual(parseSelection('all', detected), detected);
  assert.deepEqual(parseSelection('1,3', detected), ['claude', 'cursor']);
  assert.deepEqual(parseSelection('opencode claude claude', detected), ['opencode', 'claude']);
});

test('parseSelection rejects unknown choices', () => {
  assert.throws(() => parseSelection('9', ['claude']), /invalid choice/);
  assert.throws(() => parseSelection('bogus', ['claude']), /unknown agent/);
});

test('askYesNo uses defaults and validates answers', () => {
  assert.equal(askYesNo('', true), true);
  assert.equal(askYesNo('', false), false);
  assert.equal(askYesNo('Y', false), true);
  assert.equal(askYesNo('no', true), false);
  assert.throws(() => askYesNo('maybe'), /answer y or n/);
});
