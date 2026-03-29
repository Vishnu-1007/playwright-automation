const { test, expect } = require('@playwright/test');
const Saucedemo = require('./pages/pages/SauceDemoPage');

test.describe('test for login and logout etc', () => {

    test.beforeEach(async ({ page }) => {
        const saucedemo = new Saucedemo(page);
        await saucedemo.navigate();
    });

    test('login', async ({ page }) => {
        const saucedemo = new Saucedemo(page);
        await saucedemo.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory/);
    });

    test('products', async ({ page }) => {
        const saucedemo = new Saucedemo(page);
        await saucedemo.login('standard_user', 'secret_sauce');
        await expect(saucedemo.productsTitle).toHaveText('Products');
    });

    test('logout', async ({ page }) => {
        const saucedemo = new Saucedemo(page);
        await saucedemo.login('standard_user', 'secret_sauce');
        await saucedemo.logout();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

});