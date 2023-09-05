import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { expect } from "@playwright/test";
When(
  "I add item with name {string}",
  { timeout: 15000 },
  async function (item_name) {
    await pageFixture.page
      .locator(
        `//div[@class="inventory_list"]//div[@class="inventory_item_name"][contains(text(),"${item_name}")]/../../following-sibling::div//button`
      )
      .click();
  }
);
Then(
  "The cart has item with name {string}",
  { timeout: 9000 },
  async function (item_name) {
    var cart = await pageFixture.page.locator("#shopping_cart_container");
    console.log("type:::" + JSON.stringify(cart));
    await cart.click();

    await pageFixture.page.waitForLoadState("domcontentloaded");
    await expect(
      pageFixture.page.locator(
        `//div[@class="inventory_item_name"][contains(text(),"${item_name}")]`
      )
    ).toBeVisible();
  }
);
