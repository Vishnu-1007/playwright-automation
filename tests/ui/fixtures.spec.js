const base = require('@playwright/test')

const test = base.test.extend({
    loggedIn : async({page}, use )=>{
        await page.goto('https://www.saucedemo.com')
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        await use(page);
        console.log('Test done, fixture cleaning up');   
    }
})

const {expect} = require('@playwright/test')

test('products page using fixture', async({loggedIn})=>{
    await expect(loggedIn).toHaveURL(/inventory/)
    await expect(loggedIn.locator('.title')).toHaveText('Products')
});