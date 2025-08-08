import { test, expect } from '@playwright/test';

test.describe('API Status Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/support/api-status');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/API Status/);
  });

  test('displays main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'API Status' })).toBeVisible();
  });

  test('displays operational status', async ({ page }) => {
    await expect(page.getByText('All systems operational.')).toBeVisible();
  });
});