
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
    await page.locator('footer').getByRole('link', { name: 'About' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'About' })).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'Careers' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'Careers' })).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'Blog' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'Blog' })).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'Contact' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('displays Support links', async ({ page }) => {
    await expect(page.locator('footer >> h3:has-text("Support")')).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'Documentation' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'Documentation' })).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'Guides' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'Guides' })).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'API Status' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'API Status' })).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'Live Chat' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'Live Chat' })).toBeVisible();
  });

  test('displays Legal links', async ({ page }) => {
    await expect(page.locator('footer >> h3:has-text("Legal")')).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'Privacy' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'Privacy' })).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'Terms' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'Terms' })).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'Cookie Policy' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'Cookie Policy' })).toBeVisible();
    await page.locator('footer').getByRole('link', { name: 'Licenses' }).waitFor({ state: 'visible' });
    await expect(page.locator('footer').getByRole('link', { name: 'Licenses' })).toBeVisible();
  });

  test('displays copyright information', async ({ page }) => {
    await expect(page.locator('footer >> text=/© 2025 Tsurayya Engineering. All rights reserved./')).toBeVisible();
  });
});
