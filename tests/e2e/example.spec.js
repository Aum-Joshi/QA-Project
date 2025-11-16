const { test, expect } = require('@playwright/test');

test('Greet button should show greeting', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('#name', 'Aum');
  await page.click('#greetBtn');
  await expect(page.locator('#greeting')).toHaveText('Hello, Aum!');
});
