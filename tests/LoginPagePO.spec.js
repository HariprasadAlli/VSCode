  const { test, expect } = require('@playwright/test');
  const {customtest} = require('../utils/test-base');
  const { POManager } = require('../pageobjects/POManager');

  test.describe.configure({mode:'parallel'})

  //Json->string->js object
  const dataset = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")))

  customtest('@smoke GLAMS Login withextend', async ({ page, testDataForLogin }) => {

    const poManager = new POManager(page);
    

    const loginPage = poManager.getLoginPage();

    await loginPage.goTo();
    await loginPage.validLogin(testDataForLogin.userName, testDataForLogin.password, testDataForLogin.vpin1, testDataForLogin.vpin2, testDataForLogin.vpin3);

    const dashboardPage = poManager.getDashboardPage();

    await dashboardPage.goToDashboard();

    await page.waitForTimeout(5000);

  });


  test('GLAMS Login', async ({ page }) => {

    const poManager = new POManager(page);
    

    const loginPage = poManager.getLoginPage();

    await loginPage.goTo();
    await loginPage.validLogin(dataset.userName, dataset.password, dataset.vpin1, dataset.vpin2, dataset.vpin3);

    const dashboardPage = poManager.getDashboardPage();

    await dashboardPage.goToDashboard();

    await page.waitForTimeout(1000);

  });


  test('@smoke GLAMS Login second', async ({ page }) => {

    const poManager = new POManager(page);
    

    const loginPage = poManager.getLoginPage();

    await loginPage.goTo();
    await loginPage.validLogin(dataset.userName, dataset.password, dataset.vpin1, dataset.vpin2, dataset.vpin3);

    const dashboardPage = poManager.getDashboardPage();

    await dashboardPage.goToDashboard();

    await page.waitForTimeout(1000);

  });
