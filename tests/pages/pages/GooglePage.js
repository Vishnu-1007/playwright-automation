
class GooglePage{
    constructor(page){
        this.page = page;
        this.serachBox = page.getByRole("combobox");
        this.searchButton = page.getByRole("button", {name: "Google Search"}).first()
    }

    async navigate(){
        await this.page.goto('https://google.com');
    }

    async searchFor(text){
        await this.serachBox.fill(text);
        await this.page.keyboard.press("Enter");
    }
}

module.exports = GooglePage;