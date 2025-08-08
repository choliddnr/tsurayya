import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Tsurayya Engineering - Nearshore Software Development & Staff Augmentation");
});

test('get started link', async ({ page }) => {
  await page.goto('/', { timeout: 60000 });

  // Click the get started link.
  await page.getByRole('link', { name: 'Learn More About Us' }).click();

  // Expects the URL to contain a "/about" substring.
  await expect(page).toHaveURL(/.*about/);
});

test('displays About Tsurayya Engineering section', async ({ page }) => {
  await page.goto('/');

  // Expect the About section heading to be visible
  await expect(page.getByRole('heading', { name: 'About Tsurayya Engineering' })).toBeVisible();
});

test('displays Hero section main heading', async ({ page }) => {
  await page.goto('/');

  // Expect the Hero section main heading to be visible
  await expect(page.locator('h1').filter({ hasText: 'Build, Scale, and Innovate' })).toBeVisible();
  await expect(page.locator('h1').filter({ hasText: 'With a Trusted Partner' })).toBeVisible();
});

test('displays Services section first card heading', async ({ page }) => {
  await page.goto('/');

  // Expect the first service card heading to be visible
  await expect(page.getByRole('heading', { name: 'Custom Website & Web App Development' })).toBeVisible();
});