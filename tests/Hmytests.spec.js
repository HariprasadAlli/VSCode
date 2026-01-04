import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://glams61qa.glams.ie/Login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Hariprasad');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Perigord1!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#vpin1').fill('1');
  await page.locator('#vpin2').fill('1');
  await page.locator('#vpin3').fill('1');
  await page.locator('#vpin3').press('Enter');
  await page.getByText('Ha', { exact: true }).click();
  await page.getByRole('link', { name: 'Profile', exact: true }).click();
  await page.locator('#frstName').click();
  await page.locator('#frstName').click();
  await page.locator('#frstName').press('ControlOrMeta+a');
});