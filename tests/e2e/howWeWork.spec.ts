import { test, expect } from '@playwright/test';

test.describe('How We Work Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 60000 });
    await page.waitForLoadState('networkidle');
  });

  test('displays How We Work section heading', async ({ page }) => {
    await expect(page.locator('h2', { hasText: 'How We Work' })).toBeVisible();
  });

  test('displays Discovery Call step', async ({ page }) => {
    await expect(page.locator('h3', { hasText: 'Discovery Call' })).toBeVisible();
  });

  test('displays Proposal & Timeline step', async ({ page }) => {
    await expect(page.locator('h3', { hasText: 'Proposal & Timeline' })).toBeVisible();
  });

  test('displays Build & Feedback Loops step', async ({ page }) => {
    await expect(page.locator('h3', { hasText: 'Build & Feedback Loops' })).toBeVisible();
  });

  test('displays Launch & Support step', async ({ page }) => {
    await expect(page.locator('h3', { hasText: 'Launch & Support' })).toBeVisible();
  });
});