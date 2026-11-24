import { agentById } from './targets.mjs';

export function parseSelection(input, detected) {
  const raw = (input ?? '').trim();
  if (raw === '' || raw.toLowerCase() === 'all') return [...detected];
  const ids = [];
  for (const token of raw.split(/[\s,]+/).filter(Boolean)) {
    if (/^\d+$/.test(token)) {
      const index = Number(token) - 1;
      if (index < 0 || index >= detected.length) {
        throw new Error(`invalid choice: ${token}`);
      }
      ids.push(detected[index]);
    } else {
      const id = token.toLowerCase();
      if (!agentById(id)) throw new Error(`unknown agent: ${token}`);
      ids.push(id);
    }
  }
  return [...new Set(ids)];
}

export function askYesNo(input, defaultValue = false) {
  const value = (input ?? '').trim().toLowerCase();
  if (value === '') return defaultValue;
  if (value === 'y' || value === 'yes') return true;
  if (value === 'n' || value === 'no') return false;
  throw new Error(`answer y or n (got: ${input})`);
}
