const { test, expect } = require('@playwright/test');
const Saucedemo = require('../../pages/SauceDemoPage');
const loginCreds = require('../../test-data/testData')
const {loginSauceDemo} = require('../../utils/helper');

const username = loginCreds.saucedemo.validUser.username;
const password = loginCreds.saucedemo.validUser.password;

test.describe('test for login and logout etc', () => {

    test.beforeEach(async ({ page }) => {
        // const saucedemo = new Saucedemo(page);
        // await saucedemo.navigate();
         await loginSauceDemo(page)
    });

    test('login', async ({ page }) => {
        // const saucedemo = new Saucedemo(page);
        // await saucedemo.login(username, password);
        await expect(page).toHaveURL(/inventory/);
    });

    test('products', async ({ page }) => {
        const saucedemo = new Saucedemo(page);
        // await saucedemo.login(username, password);
        await expect(saucedemo.productsTitle).toHaveText('Products');
    });

    test('logout', async ({ page }) => {
        const saucedemo = new Saucedemo(page);
        // await saucedemo.login(username, password);
        await saucedemo.logout();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

    test.afterEach(async({page})=>{
        console.log('Test finished -current url', page.url())
    })

});