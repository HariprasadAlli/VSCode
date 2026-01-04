const {test, expect} = require('@playwright/test')

test('Assertions', async({page}) => {

    await page.goto('https://glams61qa.glams.ie/Login');
    await expect(page).toHaveURL('https://glams61qa.glams.ie/Login');

    await expect(page).toHaveTitle('GLAMS  -  Artwork Management System');

    const logoElement = await page.locator("//img[@src='/Content/themes/Hydrogen/Images/Logos/GLAMS_Portrait.svg']");
    await expect(logoElement).toBeVisible();

    await page.locator('#UserName').fill('Hariprasad');

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

    const inputbox = await page.getByText('Technical Namescdc');
    await expect.soft(inputbox).toBeEnabled();

    

    const countryCheckBox =  await page.getByRole('checkbox', { name: 'Confirm, Country is mentioned correctly.'});
    await expect(countryCheckBox).toBeChecked();

    const savesubmitbutton = await page.getByText('Save and Submit to Draft');
    await expect(savesubmitbutton).toHaveAttribute('type', 'button');

    await expect(await page.locator("//div[@class='container-fluid main-holder']//h2[@class='section-title ng-binding']")).toHaveText('Technical Component Request');

    await expect(await page.locator('.container-fluid.main-holder h2.section-title.ng-binding')).toContainText('Technical Component');


    const nameInput = await page.locator("(//input[@id='ctrl7c43368cefb94810b44cf4f02c4c7d07'])[1]");
    await nameInput.fill('abc');
    await expect(nameInput).toHaveValue('abc');

    //const options = await page.locator("//span[@aria-expanded='true']//span[@aria-label='select']");
    //await expect(options).toHaveCount(3);


    








})