const {test, expect} =  require('@playwright/test')

test('handle Checkbox', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("//input[@type='checkbox' and @id='sunday']").check();
    // await page.check('#male');
    await page.waitForTimeout(1000);

    await expect(await page.locator("//input[@type='checkbox' and @id='sunday']")).toBeChecked();
    await expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@type='checkbox' and @id='monday']").isChecked()).toBeFalsy();


    //Multiplecheck boxes
    const checkboxLocators = [
                                    "//input[@type='checkbox' and @id='sunday']",
                                    "//input[@type='checkbox' and @id='monday']",
                                    "//input[@type='checkbox' and @id='friday']"];

    for(const locator of checkboxLocators){
        await page.locator(locator).check();
    }

    for(const locator of checkboxLocators){
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck();
        }
    }


    await page.waitForTimeout(1000);
    



})

