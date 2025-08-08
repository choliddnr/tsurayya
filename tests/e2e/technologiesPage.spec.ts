import { test, expect } from '@playwright/test';

test.describe('Technologies Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/technologies');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Our Technologies/);
  });

  test('displays PageHero title', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Our Technologies' })).toBeVisible();
  });

  test('displays Node.js technology detail', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Node.js' })).toBeVisible();
  });

  test('displays Python technology detail', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Python' })).toBeVisible();
  });

  test('displays AWS technology detail', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'AWS' })).toBeVisible();
  });
});