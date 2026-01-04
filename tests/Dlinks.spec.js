//const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test';

test('Locators', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    const products = await page.$$("//nav[@class='navbar navbar-inverse']//a");
    console.log("Total products found:", products.length);


    for(const product of products){

        const productName = await product.textContent();
        console.log(productName);

    }

    await page.close();



    //click on login button - property


})