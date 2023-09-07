import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { queryDatabase } from "../../../commons/postgre";
import { LoginPageSauceDemo } from "../../pom/SauceDemo/loginPage";
import { pageFixture } from "../../../hooks/pageFixture";
import { InventoryPageSauceDemo } from "../../pom/SauceDemo/inventoryPage";
import { CartPageSauceDemo } from "../../pom/SauceDemo/cartPage";
// let this.loginPageSauceDemo;
Given("I go to Login Page", async function () {
  this.loginPageSauceDemo = new LoginPageSauceDemo(pageFixture.page);
  await this.loginPageSauceDemo.access();
});
When("I enter username as {string}", async function (username) {
  await this.loginPageSauceDemo.enterUsername(username);
});
When("I enter password as {string}", async function (password) {
  await this.loginPageSauceDemo.enterPassword(password);
});
When("I click button Login", async function () {
  await this.loginPageSauceDemo.clickLogin();
});
Then("I navigate to Inventory Page successfully!", async function () {
  this.inventoryPageSauceDemo = new InventoryPageSauceDemo(pageFixture.page);
  await this.inventoryPageSauceDemo.check();
});
When("I add item with name {string}", async function (itemName) {
  await this.inventoryPageSauceDemo.addItemWithName(itemName);
});
Then("The cart has item with name {string}", async function (itemName) {
  await this.inventoryPageSauceDemo.gotoCart();
  this.cartPageSauceDemo = new CartPageSauceDemo(pageFixture.page);
  await this.cartPageSauceDemo.check();
  await this.cartPageSauceDemo.checkItemWithName(itemName);
});
