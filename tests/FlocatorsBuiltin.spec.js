const {test, expect} = require ('@playwright/test')


test('Buil-in-Locator', async ({page}) => {
    
     test.setTimeout(60000); // 60 seconds
  await page.goto('https://glams61qa.glams.ie/', { timeout: 60000 });


    await page.fill("#UserName", "Hariprasad")
    await page.fill("#Password", "Perigord1!")

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(await page.getByText('Ha')).toBeVisible();
 

})
