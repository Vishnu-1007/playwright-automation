class DemoBlazer{
    constructor(page){
        this.page = page;
        this.loginButton1 = page.getByRole('listitem').filter({hasText : 'Log in'})
        this.loginusername = page.locator("#loginusername");
        this.loginpassword = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', {name : 'Log in'});
        this.logout2 = page.locator('#logout2');
    }

    async login(username, password){
        await this.loginButton1.click();
        await this.loginusername.fill(username);
        await this.loginpassword.fill(password);
        await this.loginButton.click();
    }

    async logout(){
        await this.logout2.click()
    }
}

module.exports = DemoBlazer;