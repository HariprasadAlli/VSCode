class LoginPage {

  constructor(page) {
    this.page = page;
    this.userName = page.locator('#UserName');
    this.password = page.locator('#Password');
    this.loginButton = page.locator('#login_submit');
    this.vpin1 = page.locator('#vpin1');
    this.vpin2 = page.locator('#vpin2');
    this.vpin3 = page.locator('#vpin3');
    this.submitButton = page.locator("//input[@name='Submit']");
  }

  async goTo() {
    await this.page.goto("https://glams61qa.glams.ie/", { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(2000); // wait a bit for full load
  }

  async validLogin(userName, password, vpin1, vpin2, vpin3) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
    await this.vpin1.fill(vpin1);
    await this.vpin2.fill(vpin2);
    await this.vpin3.fill(vpin3);
    await this.submitButton.click();
  }

}

module.exports = { LoginPage };
