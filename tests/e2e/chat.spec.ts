import { test, expect } from '@playwright/test';

test.describe('Chat Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 60000 });
  });

  test('chat toggle button is visible', async ({ page }) => {
    const chatToggleButton = page.locator('#chat-toggle');
    await expect(chatToggleButton).toBeVisible();
  });

  test('chatbox appears when toggle button is clicked', async ({ page }) => {
    const chatToggleButton = page.locator('#chat-toggle');
    const chatbox = page.locator('#chatbox');

    await expect(chatbox).toBeHidden();
    await chatToggleButton.click();
    await expect(chatbox).toBeVisible();
  });

  test('chatbox contains essential elements after opening', async ({ page }) => {
    const chatToggleButton = page.locator('#chat-toggle');
    await chatToggleButton.click();

    const chatbox = page.locator('#chatbox');
    await expect(chatbox.getByRole('heading', { name: 'Chat with us' })).toBeVisible();
    await expect(chatbox.getByPlaceholder('Type your message...')).toBeVisible();
    await expect(chatbox.locator('#send-message')).toBeVisible();
  });
});