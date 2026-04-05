import { test, expect } from '@playwright/test';

 test.describe("test", ()=>{


  test.beforeEach("before", async({page})=>{
    await page.goto("https://www.saucedemo.com/")
  }); 
  test('successful login', async ({ page }) => {
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('#login-button').click();
  });

  test('check the failed login', async ({page})=>{
    await page.locator('[data-test="username"]').fill('dummy');
    await page.locator('[data-test="password"]').fill('dummy');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error-button"]')).toBeVisible();
  })
})


