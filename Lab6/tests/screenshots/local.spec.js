const { test, expect } = require('@playwright/test');

test('Перевірка змін усієї сторінки за скриншотом', async ({ page }) => {
  await page.goto('/');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/local-page/index-page.png');
});

test('Порівняння скриншота окремого елемента (H1)', async ({ page }) => {
  await page.goto('/');
  const element = await page.locator('h1');
  expect(await element.screenshot()).toMatchSnapshot('screenshots/local-page/index-page-element-h1.png');
});
