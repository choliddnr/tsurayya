import { test, expect } from '@playwright/test';

test.describe('Licenses Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/legal/licenses');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Licenses/);
  });

  test('displays main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Licenses' })).toBeVisible();
  });

  test('displays content', async ({ page }) => {
    await expect(page.getByText('Detailed license information coming soon!')).toBeVisible();
  });
});