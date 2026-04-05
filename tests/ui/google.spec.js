const {test, expect} = require('@playwright/test')

test('search for google', async({page})=>{
    await page.goto('https://google.com');
    await expect(page).toHaveTitle(/Google/)
})

test('search for playwright', async({page})=>{
    await page.goto('https://google.com');
    await page.getByRole('combobox').first().fill('Playwright testing');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/search/)

})

test('seaerch for button is visibile or not', async({page})=>{
    await page.goto("https://google.com");
    
    await expect(page.getByRole('button', {name :"Google Search"}).first()).toBeVisible();
})