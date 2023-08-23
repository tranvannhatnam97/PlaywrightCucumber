import { Given, When, Then } from "@cucumber/cucumber";
import { defineParams } from "../../commons/Define";
import { page, browser } from "./search";
import {
  chromium,
  Page,
  Browser,
  webkit,
  expect,
  firefox,
} from "@playwright/test";

When(
  "I add item with name {string}",
  { timeout: 15000 },
  async function (item_name) {
    await page
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
    var cart = await page.locator("#shopping_cart_container");
    console.log("type:::" + JSON.stringify(cart));
    await cart.click();

    await page.waitForLoadState("domcontentloaded");
    await expect(
      page.locator(
        `//div[@class="inventory_item_name"][contains(text(),"${item_name}")]`
      )
    ).toBeVisible();
    await page.waitForTimeout(5000);
    await page.close();
    await browser.close();
  }
);
