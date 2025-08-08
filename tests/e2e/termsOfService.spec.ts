import { test, expect } from '@playwright/test';

test.describe('Terms of Service Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/legal/terms');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Terms of Service/);
  });

  test('displays main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Terms of Service' })).toBeVisible();
  });

  test('displays content', async ({ page }) => {
    await expect(page.locator('div.prose p', { hasText: 'Detailed terms of service coming soon!' })).toBeVisible();
  });
});