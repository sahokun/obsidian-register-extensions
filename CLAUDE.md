# CLAUDE.md

## Language

Think in English, respond in Japanese.

## Architecture

Two files at the project root:

- **main.js** — Source and release artifact (plain CommonJS, no build step required). Contains two classes:
  - `RegisterExtensionsPlugin` — Plugin entry point. Calls `registerExtensions()` on load and mounts the settings tab.
  - `RegisterExtensionsSettingTab` — Settings UI. Parses comma-separated input and persists the extension list.
- **manifest.json** — Obsidian plugin metadata (id, name, version, minAppVersion).

## Key Patterns

- `this.registerExtensions(extensions, 'markdown')` — registers an array of extensions as the Markdown file type via the Obsidian API.
- Settings are stored as a string array via `loadData()` / `saveData()`. The settings UI splits on commas, trims whitespace, and strips leading dots before saving.
- No build toolchain. Edit `main.js` directly and reload Obsidian (or use the Hot Reload community plugin).

## Git Workflow

- Feature branches use the `feature/<name>` format, created from **main**
- Direct push and force push to main are prohibited
- Claude's scope of work is limited to pushing to feature branches

### PR Flow (handled by humans)
- PRs are created and merged by humans
- If Copilot's automated review leaves comments, Claude fixes them and pushes to the same feature branch
- Thread resolution and final merge are done by humans