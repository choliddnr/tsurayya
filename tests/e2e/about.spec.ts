import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/About Us | Tsurayya/);
  });

  test('displays PageHero title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'We are Tsurayya Engineering' })).toBeVisible();
  });

  test('displays Our Mission section heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Mission' })).toBeVisible();
  });

  test('displays Our Vision section heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Vision' })).toBeVisible();
  });

  test('displays Our Values section heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Values' })).toBeVisible();
  });

  test('displays Our Journey section heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Journey' })).toBeVisible();
  });

  test('displays Meet Our Team section heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Meet Our Team' })).toBeVisible();
  });

  test('displays team member Cholid', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Cholid' })).toBeVisible();
  });
});