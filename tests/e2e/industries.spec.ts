import { test, expect } from '@playwright/test';

test.describe('Industries Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/industries');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle("Industries We Serve");
  });

  test('displays PageHero title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Industries We Serve' })).toBeVisible();
  });

  test('displays Healthcare industry', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Healthcare' })).toBeVisible();
  });

  test('displays Finance industry', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Finance' })).toBeVisible();
  });

  test('displays E-commerce industry', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'E-commerce' })).toBeVisible();
  });

  test('displays Education industry', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
  });

  test('displays Real Estate industry', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Real Estate' })).toBeVisible();
  });

  test('displays Logistics industry', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Logistics' })).toBeVisible();
  });
});