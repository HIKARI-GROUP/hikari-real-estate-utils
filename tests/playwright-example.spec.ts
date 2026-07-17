import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('https://hikari-group.com');
  await expect(page).toHaveTitle(/HIKARI/);
});

test('user can navigate to pricing', async ({ page }) => {
  await page.goto('https://hikari-group.com');
  await page.click('text=Tarifs');
  await expect(page).toHaveURL(/tarifs/);
});

test('property analysis form works', async ({ page }) => {
  await page.goto('https://hikari-group.com/audit');
  await page.fill('input[name=url]', 'https://www.seloger.com/example');
  await page.click('button[type=submit]');
  await expect(page.locator('[data-testid=analysis-result]')).toBeVisible({ timeout: 30000 });
});
