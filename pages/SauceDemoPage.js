class Saucedemo{
    constructor(page){
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('#login-button');
        this.productsTitle = page.locator('.title');
        this.logoutButton =  page.locator("#react-burger-menu-btn");
        this.logoutButton1 = page.locator('#logout_sidebar_link');
    }

    async navigate(){
        await this.page.goto('https://www.saucedemo.com/')
    }

    async login(usename, pasword){
        await this.username.fill(usename);
        await this.password.fill(pasword);
        await this.loginButton.click();
    }

    async logout(){
        await this.logoutButton.click();
        await this.logoutButton1.click();
    } 
}
module.exports = Saucedemo;