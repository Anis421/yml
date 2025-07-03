const { expect } = require("@playwright/test");

exports.ContactPage = class ContactPage{
    constructor(page) {
        this.page = page;
        this.addContactButton = '//button[@id="add-contact"]';
        this.firstName = '//input[@id="firstName"]';
        this.lastName = '//input[@id="lastName"]';
        this.dob = '//input[@id="birthdate"]';
        this.email = '//input[@id="email"]';
        this.phone = '//input[@id="phone"]';
        this.country = '//input[@id="country"]';
        this.streetaddress1 = '//input[@id="street1"]';
        this.streetaddress2 = '//input[@id="street2"]';
        this.city = '//input[@id="city"]';
        this.submit = "//button[@id='submit']";
        // this.clickTable = '//td[text()=`${firstName} ${lastName}`]';
        this.editButton = '//button[@id="edit-contact"]';
    }

    async fillContact(firstName, lastName, email, city, streetaddress1, streetaddress2, country, phone, dob){
        await this.page.locator(this.addContactButton).click();
        await this.page.locator(this.firstName).fill(firstName);        
        await this.page.locator(this.lastName).fill(lastName);        
        await this.page.locator(this.dob).fill(dob);        
        await this.page.locator(this.email).fill(email);        
        await this.page.locator(this.phone).fill(phone);        
        await this.page.locator(this.country).fill(country);
        await this.page.locator(this.city).fill(city);
        await this.page.locator(this.streetaddress1).fill(streetaddress1);
        await this.page.locator(this.streetaddress2).fill(streetaddress2);
        await this.page.locator(this.submit).click();
    }

    async validateContact(firstName, lastName, email, city, streetaddress1, streetaddress2, country, phone, dob){
        await this.page.locator('//td[text()=`${firstName} ${lastName}`]').click();
        const expfName = this.page.locator('//span[@id="firstName"]');
        const explName = this.page.locator('//span[@id="lastName"]');
        const expemail = this.page.locator('//span[@id="email"]');
        const expphone = this.page.locator('//span[@id="phone"]');

        await expect(expfName).toHaveText(firstName);
        await expect(explName).toHaveText(lastName);
        await expect(expemail).toHaveText(email);
        await expect(expphone).toHaveText(phone);
    }

    async editContact(firstName){
        const contactRow = this.page.locator('(//table//tr)[2]'); 
        await contactRow.waitFor({ state: 'visible', timeout: 5000 });
        await contactRow.click();
        // await this.page.locator(this.clickTable).click();
        await this.page.locator(this.editButton).click();
        await this.page.locator(this.firstName).clear();
        await this.page.locator(this.firstName).fill(firstName);

        
    }
}
