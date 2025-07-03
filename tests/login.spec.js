import {test, expect} from '@playwright/test';

test('loginModule', async ({ page }) => {    

    const email =  page.locator('input[name="email"]');

    await email.fill("mynamebhujel12@gmail.com");

    await page.click();
    await page.goto('https://chatgpt.com');
})