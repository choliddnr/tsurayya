import { test, expect } from '@playwright/test';

test.describe('Documentation Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/support/documentation');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Documentation/);
  });

  test('displays main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Documentation' })).toBeVisible();
  });

  test('displays Getting Started section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Getting Started' })).toBeVisible();
  });

  test('displays API Reference section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'API Reference' })).toBeVisible();
  });

  test('displays Guides section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Guides' })).toBeVisible();
  });
});