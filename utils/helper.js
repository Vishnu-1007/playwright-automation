const Saucedemo = require('../pages/SauceDemoPage');
const testData = require('../test-data/testData')

async function loginSauceDemo(page) {
    const saucedemo = new Saucedemo(page)
    await saucedemo.navigate();
    await saucedemo.login(testData.saucedemo.validUser.username, testData.saucedemo.validUser.password);
    
}
module.exports = {loginSauceDemo}