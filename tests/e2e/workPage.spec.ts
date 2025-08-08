import { test, expect } from '@playwright/test';

test.describe('Work Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/work');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Our Work | Tsurayya/);
  });

  test('displays PageHero title', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Our Projects' })).toBeVisible();
  });

  test('displays search input', async ({ page }) => {
    await expect(page.getByPlaceholder('Search projects by title, description, or technology...')).toBeVisible();
  });

  test('displays at least one project card', async ({ page }) => {
    await expect(page.locator('.project-card').first()).toBeVisible();
  });

  test('filters projects based on search input', async ({ page }) => {
    await page.getByPlaceholder('Search projects by title, description, or technology...').fill('e-commerce');
    await expect(page.locator('.project-card', { hasText: 'e-commerce platform' })).toBeVisible();
    await expect(page.locator('.project-card', { hasText: 'ai chatbot' })).toBeHidden();
  });
});