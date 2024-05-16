import { expect, test } from '@playwright/test';

test.describe('Overview Page', () => {
  test('has title', async ({ page }) => {
    await page.goto('localhost:3000/');
    await expect(page).toHaveTitle(/Pokecommerce/);
  });
});
