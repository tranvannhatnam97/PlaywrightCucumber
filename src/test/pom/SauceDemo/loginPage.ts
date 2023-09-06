import { Page, expect } from "@playwright/test";
class LoginPageSauceDemo {
  page = undefined as Page;
  usernameInput = undefined;
  passwordInput = undefined;
  loginButton = undefined;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.locator("#user-name");
    this.passwordInput = this.page.locator("#password");
    this.loginButton = this.page.locator("#login-button");
  }
  async checkLoginPageSauceDemo() {
    await expect(this.loginButton).toBeVisible();
  }
  async enterUsername(username) {
    await this.usernameInput.type(username);
  }
  async enterPassword(password) {
    await this.passwordInput.type(password);
  }
  async clickLogin() {
    await this.loginButton.click();
  }
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
