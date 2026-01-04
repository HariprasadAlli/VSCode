const { test, expect} = require('@playwright/test')

test('Home Page' , async ({page}) => {
    await page.goto('https://demo.automationtesting.in/Register.html');

    const pageTitle = await page.title();
    console.log('Page title is: ' + pageTitle);

    await expect(page).toHaveTitle('Register');

    const pageURL = page.url();
    console.log('Page URL is: ' + pageURL);
    

    await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html');

    page.close();

    // Do not manually close the page or context here - the Playwright test
    // runner (fixtures) will handle cleanup automatically.

})

test.only('Locators', async ({page})=>{
    await page.goto('https://glams61qa.glams.ie/Login');
})


