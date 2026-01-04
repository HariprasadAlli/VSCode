const { test, expect, devices, chromium } = require('@playwright/test');

test('Run in iPhone 12', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    ...devices['iPhone 12'],
  });
  const page = await context.newPage();

  await page.goto('https://glams61qa.glams.ie/');
  await page.fill('#UserName', 'Hariprasad');
  await page.fill('#Password', 'Perigord1!');
  await page.locator('#login_submit').click();

  await expect(page.getByText('Ha')).toBeVisible();

  await browser.close();
});

