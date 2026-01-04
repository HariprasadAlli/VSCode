const {test, expect} =  require('@playwright/test')

test('handle Checkbox', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    
    await page.selectOption("#country", 'Brazil') 
    console.log(await page.locator("#country").textContent());
    await expect(page.locator("#country")).toHaveValue('Brazil');
    console.log(await page.locator("#country").first().textContent());
  // console.log(await page.locator("#country").nth(1).textContent());
    const allTitle = await page.locator("#countryoptions").allTextContents();
    console.log(allTitle);
    



})

