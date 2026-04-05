const {test, expect} = require('@playwright/test')
const Flipkart = require('../../pages/FlipkartPage')

test('search for flipkart' , async({page})=>{
    const flipkart = new Flipkart(page)
    await flipkart.navigate();
    await flipkart.searchFor('mobile');
    await expect(page).toHaveURL(/search/)
})