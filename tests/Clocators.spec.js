//const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test';

test('Locators', async ({page})=>{
    await page.goto('https://glams61qa.glams.ie/Login');

    //provide username -  CSS - different ways to write
    await page.locator('#UserName').fill('Hariprasad');
    console.log(await page.locator('#UserName').inputValue());
    //await page.locator('#UserName').type('testuser2');
    //await page.fill('#UserName', 'Hariprasad');
    //await page.type('#UserName', 'Hariprasad');

    await page.fill("input[id='Password']", 'Perigord1!');

    await page.click("#login_submit");

    const submitbtn = await page.locator("//input[@name='Submit']");

    await expect(submitbtn).toBeVisible();

    await page.fill("#vpin1", '1');
    await page.fill("#vpin2", '1');
    await page.fill("#vpin3", '1');

    await page.click("//input[@name='Submit']");
    

    //verify avathar is visible - xpath

    const avathar = await page.locator("//span[text()='Ha']");
    
    await avathar.waitFor({ state: 'visible', timeout: 10000 });
    await expect(avathar).toBeVisible();

    await avathar.waitFor({ state: 'visible', timeout: 10000 });

    await page.waitForSelector("//tbody[@role='rowgroup']//td//a");

    const products = await page.$$("//tbody[@role='rowgroup']//a");
    console.log("Total products found:", products.length);


    for(const product of products){

        const productName = await product.textContent();
        console.log(productName);

    }

    await page.close();



    //click on login button - property


})