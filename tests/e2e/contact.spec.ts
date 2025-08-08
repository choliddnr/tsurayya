import { test, expect } from '@playwright/test';

test.describe('Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 60000 });
  });

  test('displays Contact section heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Get in Touch' })).toBeVisible();
  });

  test('displays email address', async ({ page }) => {
    await expect(page.getByText('hello@tsurayya.com')).toBeVisible();
  });

  test('displays website address', async ({ page }) => {
    await expect(page.getByText('www.tsurayya.com')).toBeVisible();
  });

  test('displays contact form fields', async ({ page }) => {
    await expect(page.getByLabel('First name')).toBeVisible();
    await expect(page.getByLabel('Last name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Phone number')).toBeVisible();
    await expect(page.getByLabel('Message')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });
});