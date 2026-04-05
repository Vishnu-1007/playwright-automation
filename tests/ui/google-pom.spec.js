const {test, expect} = require('@playwright/test');
const GooglePage = require('../../pages/GooglePage');

test('search using Page Object Model', async({page})=>{
    const google = new GooglePage(page);
    await google.navigate()
    await google.searchFor('Playwright automation')
    await expect(page).toHaveURL(/search/);
});

test('Google title is correct', async({page})=>{
    const google = new GooglePage(page);
    await google.navigate();
    await expect(page).toHaveTitle(/Google/)
})