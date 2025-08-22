import { test, expect } from '@playwright/test';

test.describe('Careers Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/careers', { timeout: 120000 });
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Careers at Tsurayya/);
  });

  test('displays PageHero title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Join Our Team' })).toBeVisible();
  });

  test('displays Current Openings heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Current Openings' })).toBeVisible();
  });

  test('displays Senior Frontend Developer job title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Senior Frontend Developer' })).toBeVisible();
  });

  test('displays Lead Backend Engineer job title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Lead Backend Engineer' })).toBeVisible();
  });

  test('displays UX/UI Designer job title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'UX/UI Designer' })).toBeVisible();
  });
});