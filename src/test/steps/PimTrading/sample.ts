import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pom/PimTrading/loginPage";
import { WorkspacePage } from "../../pom/PimTrading/workspacePage";
import { HomePage } from "../../pom/PimTrading/TradingCatalog/homePage";
Given("I go to LoginPage", async function () {
  this.loginPage = new LoginPage(pageFixture.page);
  await this.loginPage.access();
});
When("I enter username as {string}", async function (username) {
  await this.loginPage.enterUsername(username);
});
When("I enter password as {string}", async function (password) {
  await this.loginPage.enterPassword(password);
});
When("I click button Login", async function () {
  await this.loginPage.clickLogin();
});
Then("I navigate to WorkspacePage successfully!", async function () {
  this.workspacePage = new WorkspacePage(pageFixture.page);
  await this.workspacePage.check();
});
When(
  "I choose workspace with workspace name {string}",
  async function (workspaceName) {
    await this.workspacePage.chooseNameSpaceWithName(workspaceName);
  }
);
Then(
  "I navigate to TradingCatalogPage with slug-name {string}",
  async function (slugName) {
    this.homePage = new HomePage(pageFixture.page);
    await this.homePage.check();
    await this.homePage.checkWorkspaceWithSlugName(slugName);
  }
);
