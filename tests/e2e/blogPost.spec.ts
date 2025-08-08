import { test, expect } from '@playwright/test';

test.describe('Blog Post Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog/a-guide-to-agile-development');
  });

  test('displays blog post title', async ({ page }) => {
    await expect(page).toHaveTitle(/A Modern Guide to Agile Development/);
  });

  test('displays blog post main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'A Modern Guide to Agile Development' })).toBeVisible();
  });

  test('displays blog post content', async ({ page }) => {
    await expect(page.getByText('Agile is an iterative approach to project management and software development')).toBeVisible();
  });
});