
import { test, expect } from '@playwright/test';

test.describe('NavDropdown Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Solutions dropdown appears on hover and contains correct content', async ({ page }) => {
    const solutionsButton = page.locator('header nav button:has-text("Solutions")');
    const solutionsDropdown = page.locator('header nav div.group:has(button:has-text("Solutions")) div[role="menu"]');

    await solutionsButton.hover();
    await solutionsDropdown.waitFor({ state: 'visible' });
    await expect(solutionsDropdown).toBeVisible();

    await expect(solutionsDropdown.locator('h3:has-text("We craft scalable digital solutions tailored to real-world business challenges.")')).toBeVisible();
    await expect(solutionsDropdown.locator('p:has-text("From websites to AI-powered systems, our solutions are built to solve problems and deliver results.")')).toBeVisible();

    await expect(solutionsDropdown.locator('a[href="/services"]:has-text("AI & Automation")')).toBeVisible();
    await expect(solutionsDropdown.locator('a[href="/services"]:has-text("Web Development")')).toBeVisible();
    await expect(solutionsDropdown.locator('a[href="/services"]:has-text("Infrastructure")')).toBeVisible();
    await expect(solutionsDropdown.locator('a[href="/services"]:has-text("Business Tools")')).toBeVisible();
  });

  test('Technologies dropdown appears on hover and contains correct content', async ({ page }) => {
    const technologiesButton = page.locator('header nav button:has-text("Technologies")');
    const technologiesDropdown = page.locator('header nav div.group:has(button:has-text("Technologies")) div[role="menu"]');

    await technologiesButton.hover();
    await technologiesDropdown.waitFor({ state: 'visible' });
    await expect(technologiesDropdown).toBeVisible();

    await expect(technologiesDropdown.locator('h3:has-text("We choose proven, modern technologies trusted by the industry.")')).toBeVisible();
    await expect(technologiesDropdown.locator('p:has-text("Our stack is carefully selected for performance, scalability, and long-term reliability.")')).toBeVisible();

    await expect(technologiesDropdown.locator('a[href="/technologies"]:has-text("Frontend")')).toBeVisible();
    await expect(technologiesDropdown.locator('a[href="/technologies"]:has-text("Backend")')).toBeVisible();
    await expect(technologiesDropdown.locator('a[href="/technologies"]:has-text("AI Tools")')).toBeVisible();
    await expect(technologiesDropdown.locator('a[href="/technologies"]:has-text("DevOps & Infra")')).toBeVisible();
  });

  test('Industries dropdown appears on hover and contains correct content', async ({ page }) => {
    const industriesButton = page.locator('header nav button:has-text("Industries")');
    const industriesDropdown = page.locator('header nav div.group:has(button:has-text("Industries")) div[role="menu"]');

    await industriesButton.hover();
    await industriesDropdown.waitFor({ state: 'visible' });
    await expect(industriesDropdown).toBeVisible();

    await expect(industriesDropdown.locator('h3:has-text("We serve diverse industries with custom-fit digital tools.")')).toBeVisible();
    await expect(industriesDropdown.locator('p:has-text("No matter your field, we adapt technology to meet your goals and speak your language.")')).toBeVisible();

    await expect(industriesDropdown.locator('a[href="/industries"]:has-text("Food & Beverage")')).toBeVisible();
    await expect(industriesDropdown.locator('a[href="/industries"]:has-text("Retail & eCommerce")')).toBeVisible();
    await expect(industriesDropdown.locator('a[href="/industries"]:has-text("Agencies")')).toBeVisible();
    await expect(industriesDropdown.locator('a[href="/industries"]:has-text("Health & Wellness")')).toBeVisible();
    await expect(industriesDropdown.locator('a[href="/industries"]:has-text("Education")')).toBeVisible();
  });
});
