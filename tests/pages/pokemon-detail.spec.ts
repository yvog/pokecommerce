import { expect, test } from '@playwright/test';

test.describe('Pokemon Detail Page', () => {
  test('has unique title', async ({ page }) => {
    await page.goto('localhost:3000/pokemon/1');
    await expect(page).toHaveTitle(/Bulbasaur detail/);
  });
});
