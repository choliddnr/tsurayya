import { test, expect } from '@playwright/test';

test.describe('Cookie Policy Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/legal/cookie-policy');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Cookie Policy/);
  });

  test('displays main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Cookie Policy' })).toBeVisible();
  });

  test('displays content', async ({ page }) => {
    await expect(page.getByText('Detailed cookie policy coming soon!')).toBeVisible();
  });
});