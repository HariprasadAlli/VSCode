const {test, expect} =  require('@playwright/test')

test('handle Radio down', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#male').check();
    // await page.check('#male');
    await page.waitForTimeout(1000);

    await expect(await page.locator('#male')).toBeChecked();
    await expect(await page.locator('#male').isChecked()).toBeTruthy();

    await expect(await page.locator('#female').isChecked()).toBeFalsy();



})

