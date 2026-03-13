# Register Extensions

An [Obsidian](https://obsidian.md) plugin that registers arbitrary file extensions to be opened as Markdown. Works on both desktop and mobile (`isDesktopOnly: false`).

## Features

- Register any file extension (e.g. `txt`, `log`, `conf`) to open as Markdown in Obsidian
- Manage extensions from the settings tab — no config file editing required
- Changes take effect after reloading Obsidian

## Installation

1. Download `main.js` and `manifest.json` from the latest release
2. Create the folder `<your vault>/.obsidian/plugins/register-extensions/`
3. Copy both files into that folder
4. Reload Obsidian and enable the plugin under **Settings → Community plugins**

## Usage

1. Open **Settings → Register Extensions**
2. Enter the extensions you want to open as Markdown, comma-separated (e.g. `txt,log,conf`)
3. Reload Obsidian to apply changes

Default extensions: `txt`, `log`

> **Note:** Leading dots are stripped automatically — entering `.txt` and `txt` are equivalent.

## License

MIT
