import { test, expect } from '@playwright/test';

test.describe('Technologies Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 60000 });
  });

  test('displays Technologies section heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Technologies We Master' })).toBeVisible();
  });

  test('displays Node.js technology item', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Node.js' })).toBeDefined();
  });

  test('displays Python technology item', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Python' })).toBeDefined();
  });

  test('displays AWS technology item', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'AWS' })).toBeDefined();
  });
});