class Flipkart{
    constructor(page){
        this.page = page;
        this.serachBox = page.getByPlaceholder('Search for Products, Brands and More').first()

    }

    async navigate(){
        await this.page.goto('https://www.flipkart.com');
    }

    async searchFor(text){
        await this.serachBox.fill(text)
        await this.page.keyboard.press('Enter');
    }
}

module.exports = Flipkart