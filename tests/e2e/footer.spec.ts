
import { test, expect } from '@playwright/test';

test.describe('Footer Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays the company name', async ({ page }) => {
    await expect(page.locator('footer >> text=TsurayyaEngineering')).toBeVisible();
  });

  test('displays the company slogan', async ({ page }) => {
    await expect(page.locator('footer >> text=Transforming businesses through innovative digital solutions.')).toBeVisible();
  });

  test('displays social media links', async ({ page }) => {
    await expect(page.locator('footer a[href="#"] i.fa-twitter')).toBeVisible();
    await expect(page.locator('footer a[href="#"] i.fa-linkedin-in')).toBeVisible();
    await expect(page.locator('footer a[href="#"] i.fa-github')).toBeVisible();
    await expect(page.locator('footer a[href="#"] i.fa-instagram')).toBeVisible();
  });

  test('displays Solutions links', async ({ page }) => {
    await expect(page.locator('footer >> h3:has-text("Solutions")')).toBeVisible();
    await expect(page.locator('footer >> a[href="/services"]:has-text("Web Development")')).toBeVisible();
    await expect(page.locator('footer >> a[href="/services"]:has-text("AI Integration")')).toBeVisible();
    await expect(page.locator('footer >> a[href="/services"]:has-text("Cloud Services")')).toBeVisible();
    await expect(page.locator('footer >> a[href="/services"]:has-text("Data Analytics")')).toBeVisible();
  });

  test('displays Company links', async ({ page }) => {
    await expect(page.locator('footer >> h3:has-text("Company")')).toBeVisible();
    await expect(page.locator('footer >> h3:has-text("Company") + ul >> a[href="/about"]')).toBeVisible();
    await expect(page.locator('footer >> h3:has-text("Company") + ul >> a[href="/careers"]')).toBeVisible();
    await expect(page.locator('footer >> h3:has-text("Company") + ul >> a[href="/blog"]')).toBeVisible();
    await expect(page.locator('footer >> h3:has-text("Company") + ul >> a[href="/contact"]')).toBeVisible();
  });

  test('displays Support links', async ({ page }) => {
    await expect(page.locator('footer >> h3:has-text("Support")')).toBeVisible();
    await expect(page.locator('footer >> h3:has-text("Support") + ul >> a[href="/support/documentation"]')).toBeVisible();
    await expect(page.locator('footer >> h3:has-text("Support") + ul >> a[href="/support/guides"]')).toBeVisible();
    await expect(page.locator('footer >> h3:has-text("Support") + ul >> a[href="/support/api-status"]')).toBeVisible();
    await expect(page.locator('footer >> h3:has-text("Support") + ul >> a[href="/contact"]')).toBeVisible();
  });

  test('displays Legal links', async ({ page }) => {
    await expect(page.locator('footer >> h3:has-text("Legal")')).toBeVisible();
    await expect(page.locator('footer >> a[href="/legal/privacy"]')).toBeVisible();
    await expect(page.locator('footer >> a[href="/legal/terms"]')).toBeVisible();
    await expect(page.locator('footer >> a[href="/legal/cookie-policy"]')).toBeVisible();
    await expect(page.locator('footer >> a[href="/legal/licenses"]')).toBeVisible();
  });

  test('displays copyright information', async ({ page }) => {
    await expect(page.locator('footer >> text=/© 2025 Tsurayya Engineering. All rights reserved./')).toBeVisible();
  });
});
