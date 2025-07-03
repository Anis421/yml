import { expect, test } from "@playwright/test";

exports.LoginPage = class LoginPage{
    constructor(page) {
        this.page = page;
        this.usernameInput = '#email';
        this.passwordInput = '//input[@placeholder="password"]';
        this.loginButton = '//button[@id="submit"]';
        this.logout = '//button[@id="logout"]';
        this.loginValidation = '//p[contains(text(), "Click on any contact to view the Contact Details")]';

    }

    async login(username, password){
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator('//input[@placeholder="Password"]').fill(password);
        await this.page.locator(this.loginButton).click();
    }

    // async verifyValidLogin(){
    //     await expect(this.loginValidation).toBeVisible();
    // }
}