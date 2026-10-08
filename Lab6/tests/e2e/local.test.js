import { test, expect } from '@playwright/test';

test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Локальна сторінка/);
});

test('Перевірка головного заголовка H1', async ({ page }) => {
  await page.goto('/');
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Вітаємо на локальній сторінці');
});

test('Перевірка форми входу', async ({ page }) => {
  await page.goto('/');
  await page.fill('#username', 'test_user');
  await page.fill('#password', 'password123');
  await page.click('#loginButton');
  await expect(page.locator('#successMessage')).toBeVisible();
});

test('Валідація обов’язкових полів форми', async ({ page }) => {
  await page.goto('/');
  await page.click('#loginButton');
  const error = await page.evaluate(() => document.querySelector(':invalid'));
  expect(error).not.toBeNull();
});
