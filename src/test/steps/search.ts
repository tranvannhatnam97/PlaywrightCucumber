import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import {
  chromium,
  Page,
  Browser,
  webkit,
  expect,
  firefox,
} from "@playwright/test";

Given("I {action} {url}", { timeout: 15000 }, async function (action, url) {
  console.log("url:::" + url);
  if (action == "go to") {
    await pageFixture.page.goto(url);
    await expect(pageFixture.page).toHaveTitle("Swag Labs");
  }
});
When(
  "I enter username as {string}",
  { timeout: 9000 },
  async function (username) {
    await pageFixture.page.locator("#user-name").type(username);
  }
);

When(
  "I enter password as {string}",
  { timeout: 2000 },
  async function (password) {
    await pageFixture.page.locator("#password").type(password);
  }
);

When("I click button Login", async function () {
  await pageFixture.page.locator("#login-button").click();
});

Then(
  "I navigate to HomePage successfully",
  { timeout: 9000 },
  async function () {
    await expect(pageFixture.page).toHaveURL(
      "https://www.saucedemo.com/inventory.html"
    );
    await pageFixture.page.waitForTimeout(5000);
  }
);

Then("I navigate to HomePage failed", { timeout: 9000 }, async function () {
  await expect(pageFixture.page).not.toHaveTitle("Swag Labs");
  await pageFixture.page.close();
});
