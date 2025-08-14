import { test, expect } from '@playwright/test';

test.describe('Project Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects/ai-chatbot');
    await page.waitForLoadState('networkidle');
  });

  test('displays project title', async ({ page }) => {
    await expect(page).toHaveTitle(/AI Chatbot for Customer Support/);
  });

  test('displays project main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'AI Chatbot for Customer Support' })).toBeVisible();
  });

  test('displays project description', async ({ page }) => {
    await expect(page.getByText('Automating customer support with a custom-trained AI chatbot')).toBeVisible();
  });

  test('displays technologies used', async ({ page }) => {
    await expect(page.getByText('TensorFlow')).toBeVisible();
    await expect(page.getByText('Node.js')).toBeVisible();
    await expect(page.getByText('WebSocket')).toBeVisible();
    await expect(page.getByText('MongoDB')).toBeVisible();
  });
});