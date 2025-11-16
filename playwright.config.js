const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
