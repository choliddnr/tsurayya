import { test, expect } from '@playwright/test';

test.describe('Work Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 60000 });
  });

  test('displays Work section heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Work' })).toBeVisible();
  });

  test('displays at least one project card', async ({ page }) => {
    await expect(page.locator('.group.relative.overflow-hidden.rounded-xl')).toHaveCount(3);
  });

  test('displays View Our Case Studies button', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'View Our Case Studies' })).toBeVisible();
  });
});