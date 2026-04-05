const {test, expect} = require('@playwright/test');

test('search for laptop', async({page}) =>{
    await page.goto('https://www.amazon.in');
    await page.getByPlaceholder('Search Amazon.in').fill('laptop');
    await page.getByPlaceholder('Search Amazon.in').press('Enter');
    await expect(page).toHaveTitle(/laptop/i);
})  