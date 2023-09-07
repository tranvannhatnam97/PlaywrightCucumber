import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class LoginPage extends AbstractPage {
  usernameInput = undefined;
  passwordInput = undefined;
  loginButton = undefined;
  label = undefined;
  url = "https://test-pim.ichiba.net/vi/";
  constructor(page: Page) {
    super(page);
    this.usernameInput = this.page.locator("#txt_email");
    this.passwordInput = this.page.locator("#input_password");
    this.loginButton = this.page.locator("#btn_submit");
    this.label = this.page.locator('//span[contains(text(),"Login")]');
  }
  async check(): Promise<void> {
    await expect(this.label).toBeVisible();
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
