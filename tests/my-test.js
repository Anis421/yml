import{ test, expect} from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://youtube.com/');

    await expect(page).toHaveTitle(/Youtube/);
});