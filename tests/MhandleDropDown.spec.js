const {test, expect} =  require('@playwright/test')

test('handle Checkbox', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("#country").selectOption({label: 'India'});
    
    await page.locator("#country").selectOption('Canada');
    
    await page.locator("#country").selectOption({value: 'japan'});
    
    await page.locator("#country").selectOption({index: 3});

    await page.selectOption("#country", 'Brazil') //by text total 5 ways


    //Assertions:
    //check total number of options in dropdown
    

    



})

