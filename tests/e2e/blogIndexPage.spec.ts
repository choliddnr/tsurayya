import { test, expect } from '@playwright/test';

test.describe('Blog Index Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Blog | Tsurayya/);
  });

  test('displays PageHero title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Blog' })).toBeVisible();
  });

  test('displays search input', async ({ page }) => {
    await expect(page.getByPlaceholder('Search articles by title or description...')).toBeVisible();
  });

  test('displays at least one blog post', async ({ page }) => {
    await expect(page.locator('.post-item').first()).toBeVisible();
  });

  test('filters blog posts based on search input', async ({ page }) => {
            await page.getByPlaceholder('Search articles by title or description...').fill('agile');
    await expect(page.locator('.post-item[data-title*="the future of web development"]')).toBeHidden();
    await expect(page.locator('.post-item[data-title*="a modern guide to agile development"]')).toBeVisible();
  });
});