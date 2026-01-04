const{test, expect} = require('@playwright/test')

test('handle input', async ({page}) =>{

    await page.goto('https://glams61qa.glams.ie/Login');
    await expect(page).toHaveURL('https://glams61qa.glams.ie/Login');

    await expect(page).toHaveTitle('GLAMS  -  Artwork Management System');

    const logoElement = await page.locator("//img[@src='/Content/themes/Hydrogen/Images/Logos/GLAMS_Portrait.svg']");
    await expect(logoElement).toBeVisible();

    const username = page.locator('#UserName');
    await username.fill('Hariprasad');

    await page.fill("input[id='Password']", 'Perigord1!');

    await page.click("#login_submit");

    const submitbtn = await page.locator("//input[@name='Submit']");

    await expect(submitbtn).toBeVisible();

    await page.fill("#vpin1", '1');
    await page.fill("#vpin2", '1');
    await page.fill("#vpin3", '1');

    await page.click("//input[@name='Submit']");

    await page.getByText('GLAMS Add New').click();
    await page.getByText('Technical Component Request').click();

    await expect (await page.locator('#ctrl7c43368cefb94810b44cf4f02c4c7d07')).toBeVisible();
    await expect (await page.locator('#ctrl7c43368cefb94810b44cf4f02c4c7d07')).toBeEmpty();
    await expect (await page.locator('#ctrl7c43368cefb94810b44cf4f02c4c7d07')).toBeEditable();
    await expect (await page.locator('#ctrl7c43368cefb94810b44cf4f02c4c7d07')).toBeEnabled();


    await page.locator('#ctrl7c43368cefb94810b44cf4f02c4c7d07').fill('Hariprasad');
    await page.fill("#ctrl7c43368cefb94810b44cf4f02c4c7d07", "Hariprasad");

    await page.waitForTimeout(5000);
    








})