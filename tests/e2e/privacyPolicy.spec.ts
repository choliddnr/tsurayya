import { test, expect } from '@playwright/test';

test.describe('Privacy Policy Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/legal/privacy');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Privacy Policy/);
  });

  test('displays main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Privacy Policy' })).toBeVisible();
  });

  test('displays content', async ({ page }) => {
    await expect(page.getByText('Detailed privacy policy coming soon!')).toBeVisible();
  });
});