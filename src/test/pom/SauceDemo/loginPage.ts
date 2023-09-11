import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class LoginPageSauceDemo extends AbstractPage {
  usernameInput = undefined;
  passwordInput = undefined;
  loginButton = undefined;
  url = "https://www.saucedemo.com/";
  constructor(page: Page) {
    super(page);
    this.usernameInput = this.page.locator("#user-name");
    this.passwordInput = this.page.locator("#password");
    this.loginButton = this.page.locator("#login-button");
  }
  async checkIn() {
    await expect(this.loginButton).toBeVisible();
  }
  async access() {
    await this.page.goto(this.url);
    await this.checkIn();
    await this.page.waitForTimeout(1000);
  }
  async enterUsername(username) {
    await this.usernameInput.type(username);
    await this.page.waitForTimeout(1000);
  }
  async enterPassword(password) {
    await this.passwordInput.type(password);
    await this.page.waitForTimeout(1000);
  }
  async clickLogin() {
    await this.loginButton.click();
    await this.page.waitForTimeout(1000);
  }
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
