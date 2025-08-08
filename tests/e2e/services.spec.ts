import { test, expect } from '@playwright/test';

test.describe('Services Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Our Services/);
  });

  test('displays PageHero title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Services' })).toBeVisible();
  });

  test('displays Custom Website & Web App Development service', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Custom Website & Web App Development' })).toBeVisible();
  });
});