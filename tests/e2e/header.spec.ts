
import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays the company logo and name', async ({ page }) => {
    await expect(page.locator('header a[href="/"] img[alt="tsurayya engineering"]')).toBeVisible();
    await expect(page.locator('header a[href="/"] >> text=TsurayyaEngineering')).toBeVisible();
  });

  test('displays desktop navigation links', async ({ page }) => {
    await expect(page.locator('header nav >> button:has-text("Solutions")')).toBeVisible();
    await expect(page.locator('header nav >> text=Technologies')).toBeVisible();
    await expect(page.locator('header nav >> text=Industries')).toBeVisible();
    await expect(page.locator('header nav a[href="/about"]')).toBeVisible();
    await expect(page.locator('header nav a[href="/work"]')).toBeVisible();
    await expect(page.locator('header nav a[href="/blog"]')).toBeVisible();
    await expect(page.locator('header nav a[href="/contact"]')).toBeVisible();
  });

  test('mobile menu button is visible on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 767, height: 800 });
    await expect(page.locator('#mobile-menu-button')).toBeVisible();
  });

  test('mobile menu opens and closes on button click', async ({ page }) => {
    await page.setViewportSize({ width: 767, height: 800 });
    const mobileMenu = page.locator('#mobile-menu');
    const mobileMenuButton = page.locator('#mobile-menu-button');

    await expect(mobileMenu).toBeHidden();
    await mobileMenuButton.click();
    await expect(mobileMenu).toBeVisible();
    await mobileMenuButton.click();
    await expect(mobileMenu).toBeHidden();
  });

  test('mobile menu contains navigation links', async ({ page }) => {
    await page.setViewportSize({ width: 767, height: 800 });
    const mobileMenuButton = page.locator('#mobile-menu-button');
    await mobileMenuButton.click();

    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu.locator('button:has-text("Solutions")')).toBeVisible();
    await expect(mobileMenu.locator('button:has-text("Technologies")')).toBeVisible();
    await expect(mobileMenu.locator('button:has-text("Industries")')).toBeVisible();
    await expect(mobileMenu.locator('a[href="/about"]:has-text("About")')).toBeVisible();
    await expect(mobileMenu.locator('a[href="/work"]:has-text("Our Work")')).toBeVisible();
    await expect(mobileMenu.locator('a[href="/blog"]:has-text("Blog")')).toBeVisible();
    await expect(mobileMenu.locator('a[href="/contact"]:has-text("Schedule a Call")')).toBeVisible();
  });
});
