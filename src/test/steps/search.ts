import { Given, When, Then } from "@cucumber/cucumber";
import { defineParams } from "../../commons/Define";
import {
  chromium,
  Page,
  Browser,
  webkit,
  expect,
  firefox,
} from "@playwright/test";
export let browser: Browser;
export let page: Page;

defineParams();
Given("I {action} {url}", { timeout: 15000 }, async function (action, url) {
  console.log("url:::" + url);
  browser = await webkit.launch({ headless: false });
  page = await browser.newPage();
  if (action == "go to") {
    await page.goto(url);
    await expect(page).toHaveTitle("Swag Labs");
  }
});
When(
  "I enter username as {string}",
  { timeout: 9000 },
  async function (username) {
    await page.locator("#user-name").type(username);
  }
);

When(
  "I enter password as {string}",
  { timeout: 2000 },
  async function (password) {
    await page.locator("#password").type(password);
  }
);

When("I click button Login", async function () {
  await page.locator("#login-button").click();
});

Then(
  "I navigate to HomePage successfully",
  { timeout: 9000 },
  async function () {
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.waitForTimeout(5000);
  }
);

Then("I navigate to HomePage failed", { timeout: 9000 }, async function () {
  await expect(page).not.toHaveTitle("Swag Labs");
  await page.close();
  await browser.close();
});
