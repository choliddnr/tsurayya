import { test, expect } from '@playwright/test';

test.describe('Blog Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 120000 });
  });

  test('displays Blog section heading', async ({ page }) => {
    await expect(page.locator('h2', { hasText: 'From Our Blog' })).toBeVisible();
  });

  test('displays at least one blog post', async ({ page }) => {
    await expect(page.locator('.post-item')).toHaveCount(3);
  });

  test('displays View All Articles button', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'View All Articles' })).toBeVisible();
  });
});