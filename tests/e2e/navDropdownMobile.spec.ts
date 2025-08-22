
import { test, expect } from '@playwright/test';

test.describe('NavDropdownMobile Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 767, height: 800 });
    await page.goto('/');
    await page.locator('#mobile-menu-button').click();
  });

  test('Solutions dropdown opens and contains correct content', async ({ page }) => {
    const solutionsButton = page.locator('#mobile-menu >> button:has-text("Solutions")');
    const solutionsDropdown = page.locator('#mobile-menu >> div[data-mobile-dropdown-menu]').first();

    await solutionsButton.click();
    await expect(solutionsDropdown).toBeVisible();

    await expect(solutionsDropdown.locator('p:has-text("We craft scalable digital solutions tailored to real-world business challenges.")')).toBeVisible();
    await expect(solutionsDropdown.locator('p:has-text("From websites to AI-powered systems, our solutions are built to solve problems and deliver results.")')).toBeVisible();

    await expect(solutionsDropdown.locator('a[href="/services"]:has-text("AI & Automation")')).toBeVisible();
    await expect(solutionsDropdown.locator('a[href="/services"]:has-text("Web Development")')).toBeVisible();
    await expect(solutionsDropdown.locator('a[href="/services"]:has-text("Infrastructure")')).toBeVisible();
    await expect(solutionsDropdown.locator('a[href="/services"]:has-text("Business Tools")')).toBeVisible();
  });

  test('Technologies dropdown opens and contains correct content', async ({ page }) => {
    const technologiesButton = page.locator('#mobile-menu >> button:has-text("Technologies")');
    const technologiesDropdown = page.locator('#mobile-menu >> div[data-mobile-dropdown-menu]').nth(1);

    await technologiesButton.click();
    await expect(technologiesDropdown).toBeVisible();

    await expect(technologiesDropdown.locator('p:has-text("We choose proven, modern technologies trusted by the industry.")')).toBeVisible();
    await expect(technologiesDropdown.locator('p:has-text("Our stack is carefully selected for performance, scalability, and long-term reliability.")')).toBeVisible();

    await expect(technologiesDropdown.locator('a[href="/technologies"]:has-text("Frontend")')).toBeVisible();
    await expect(technologiesDropdown.locator('a[href="/technologies"]:has-text("Backend")')).toBeVisible();
    await expect(technologiesDropdown.locator('a[href="/technologies"]:has-text("AI Tools")')).toBeVisible();
    await expect(technologiesDropdown.locator('a[href="/technologies"]:has-text("DevOps & Infra")')).toBeVisible();
  });

  test('Industries dropdown opens and contains correct content', async ({ page }) => {
    const industriesButton = page.locator('#mobile-menu >> button:has-text("Industries")');
    const industriesDropdown = page.locator('#mobile-menu >> div[data-mobile-dropdown-menu]').nth(2);

    await industriesButton.click();
    await expect(industriesDropdown).toBeVisible();

    await expect(industriesDropdown.locator('p:has-text("We serve diverse industries with custom-fit digital tools.")')).toBeVisible();
    await expect(industriesDropdown.locator('p:has-text("No matter your field, we adapt technology to meet your goals and speak your language.")')).toBeVisible();

    await expect(industriesDropdown.locator('a[href="/industries"]:has-text("Food & Beverage")')).toBeVisible();
    await expect(industriesDropdown.locator('a[href="/industries"]:has-text("Retail & eCommerce")')).toBeVisible();
    await expect(industriesDropdown.locator('a[href="/industries"]:has-text("Agencies")')).toBeVisible();
    await expect(industriesDropdown.locator('a[href="/industries"]:has-text("Health & Wellness")')).toBeVisible();
    await expect(industriesDropdown.locator('a[href="/industries"]:has-text("Education")')).toBeVisible();
  });
});
