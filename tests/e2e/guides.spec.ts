import { test, expect } from '@playwright/test';

test.describe('Guides Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/support/guides', { timeout: 60000 });
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Guides/);
  });

  test('displays main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Guides' })).toBeVisible();
  });

  test('displays content', async ({ page }) => {
                            await expect(page.getByText(/Content coming soon!/)).toBeVisible();
  });
});