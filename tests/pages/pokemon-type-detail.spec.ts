import { expect, test } from '@playwright/test';

test.describe('Pokemon Type Detail Page', () => {
  test('has unique title on first possible route', async ({ page }) => {
    await page.goto('localhost:3000/type/grass');
    await expect(page).toHaveTitle(/Grass Type/);
  });

  test('has unique title on second possible route', async ({ page }) => {
    await page.goto('localhost:3000/pokemon/1/type/grass');
    await expect(page).toHaveTitle(/Grass Type/);
  });
});
