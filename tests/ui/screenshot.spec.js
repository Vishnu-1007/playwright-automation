const {test, expect} = require('@playwright/test');

test('failing test', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByText('This text does not exist')).toBeVisible();
});