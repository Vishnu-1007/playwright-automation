import { test, expect } from '@playwright/test';


test('saucedemo login and logout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Fill credentials
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // ✅ Assert 1: URL changed after login
  await expect(page).toHaveURL(/inventory/);

  // ✅ Assert 2: Page title is correct
  await expect(page).toHaveTitle(/Swag Labs/);

  // ✅ Assert 3: Products heading is visible
  await expect(page.locator('.title')).toBeVisible();
  await expect(page.locator('.title')).toHaveText('Products');

  // Logout
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();

  // ✅ Assert 4: Back on login page after logout
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});