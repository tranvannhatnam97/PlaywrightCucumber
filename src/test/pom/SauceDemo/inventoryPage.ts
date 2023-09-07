import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class InventoryPageSauceDemo extends AbstractPage {
  productLabel = undefined;
  cartButton = undefined;
  constructor(page: Page) {
    super(page);
    this.productLabel = this.page.locator(
      '//span[@class="title"][text() = "Products"]'
    );
    this.cartButton = this.page.locator(".shopping_cart_link");
  }
  async check(): Promise<void> {
    await expect(this.productLabel).toBeVisible();
  }
  async access(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com/inventory.html");
    await this.check();
  }
  async addItemWithName(itemName) {
    await this.page
      .locator(
        `//div[@class="inventory_item_name"][text() = "${itemName}"]/../../following-sibling::*//button[text() = "Add to cart"]`
      )
      .click();
  }
  async gotoCart() {
    await this.cartButton.click();
  }
}
