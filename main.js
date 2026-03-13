'use strict';

const { Plugin, PluginSettingTab, Setting, Notice } = require('obsidian');

const DEFAULT_SETTINGS = {
    extensions: ['txt', 'log'],
};

class RegisterExtensionsPlugin extends Plugin {

    async onload() {
        await this.loadSettings();
        this.registerExtensions(this.settings.extensions, 'markdown');
        this.addSettingTab(new RegisterExtensionsSettingTab(this.app, this));
    }

    onunload() {}

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}

class RegisterExtensionsSettingTab extends PluginSettingTab {

    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        const { containerEl } = this;
        containerEl.empty();

        containerEl.createEl('h2', { text: 'Register Extensions' });

        new Setting(containerEl)
            .setName('Target extensions')
            .setDesc('Comma-separated list of file extensions to open as Markdown (e.g. txt,log,conf). Reload Obsidian after saving to apply changes.')
            .addText(text => {
                text
                    .setPlaceholder('txt,log,conf')
                    .setValue(this.plugin.settings.extensions.join(','))
                    .onChange(async (value) => {
                        const parsed = value
                            .split(',')
                            .map(e => e.trim().replace(/^\./, ''))
                            .filter(e => e.length > 0);
                        this.plugin.settings.extensions = parsed;
                        await this.plugin.saveSettings();
                        new Notice('Extensions saved. Reload Obsidian to apply changes.');
                    });
                // テキストボックスを広げる
                text.inputEl.style.width = '100%';
            });
    }
}

module.exports = RegisterExtensionsPlugin;
