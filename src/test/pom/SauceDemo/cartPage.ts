import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class CartPageSauceDemo extends AbstractPage {
  cartLabel = undefined;
  constructor(page: Page) {
    super(page);
    this.cartLabel = this.page.locator(
      '//span[@class="title"][text() = "Your Cart"]'
    );
  }
  async check(): Promise<void> {
    await expect(this.cartLabel).toBeVisible();
  }
  async access(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com/cart.html");
    await this.check();
  }
  async checkItemWithName(itemName) {
    await expect(
      this.page.locator(
        `//div[@class="inventory_item_name"][text() = "${itemName}"]`
      )
    ).toBeVisible();
  }
}
