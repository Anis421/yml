import { test, expect } from '@playwright/test';
import { LoginPage } from '../testObj/login.po.js';

test.beforeEach(async ({page}) => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com');
});

test.describe('Valid login tests', () => {
    test('Login using valid username and password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login("mynamebhujel12@gmail.com", "password");
        // await login.verifyValidLogin();
    });
});w