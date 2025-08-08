import { test, expect } from '@playwright/test';

test.describe('Why Choose Us Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays Why Choose Us section heading', async ({ page }) => {
    await expect(page.locator('h2', { hasText: 'Why Choose Us' })).toBeVisible();
  });

  test('displays Tech-First Approach reason', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Tech-First Approach' })).toBeVisible();
  });

  test('displays Security & Performance reason', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Security & Performance' })).toBeVisible();
  });

  test('displays AI-Ready by Default reason', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'AI-Ready by Default' })).toBeVisible();
  });
});