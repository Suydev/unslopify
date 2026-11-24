# Contributing to unslopify

This file is for maintainers. Consumers only need [README.md](README.md).

## Development

```bash
npm test                  # node:test suite
npm run verify            # tests + npm pack --dry-run tarball check
npm run sync              # recopy skills from ~/no-ai-slop and ~/durable-instructions
npm pack                  # sync + test + tarball
```

`npm run sync` reads the two sibling skill repositories in your home directory. Published tarballs already contain the synced skills.

## Publishing

- Locally: `npm login && npm publish` from the package directory.
- Automatically: push to `main`; `.github/workflows/publish.yml` runs tests and `npm publish --provenance`. This needs a repository secret named `NPM_TOKEN`. Bump `version` in `package.json` before each push or npm rejects the duplicate version.

Source: https://github.com/Suydev/unslopify
