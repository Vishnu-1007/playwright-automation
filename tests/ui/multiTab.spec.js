const { test, expect} = require('@playwright/test')

test('go to saucedemo', async ({page, context})=>{
    await page.goto('https://www.saucedemo.com')

    const newTab = await context.newPage();
    await newTab.goto('https://jsonplaceholder.typicode.com/users/1')
    const body = await newTab.locator('body').innerText();
    const response = JSON.parse(body);
    expect(response.username).toBe('Bret');

    await page.bringToFront();
    await expect(page).toHaveURL(/saucedemo/)
})