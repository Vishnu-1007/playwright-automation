const { test, expect } = require('@playwright/test');

test('search for mobile on flipkart', async ({ page }) => {
  await page.goto('https://www.flipkart.com');

  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);

  await page.getByPlaceholder('Search for Products, Brands and More').first().fill('mobile');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/search/, { timeout: 10000 });
});

test('flipkart logo is visible', async ({ page }) => {
  await page.goto('https://www.flipkart.com');
  await expect(page.getByRole('link', { name: 'Flipkart' }).first()).toBeVisible();
});