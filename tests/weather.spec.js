const { test, expect } = require('@playwright/test');

test.describe('Weather search validation', () => {
  test.only('Open Google, search weather, and validate page title', async ({ page }) => {
    await page.goto('https://www.google.com');

    await page.locator('textarea[name="q"], input[name="q"]').fill('weather');
    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveTitle(/weather|Google/i);
  });
});