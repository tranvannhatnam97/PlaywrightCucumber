import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";

Given(
  "I {action} {project}.{page}",
  async function (action, project, pagename) {
    if (action == "go to") {
      await pageFixture.loadPage(project, pagename);
      await pageFixture.page.goto(pageFixture.url);
      await pageFixture.page.waitForTimeout(2000);
      console.log("elements:::" + JSON.stringify(pageFixture.elements));
    }
  }
);

When("I {action} {element} as {string}", async function (action, element, txt) {
  if (action == "enter") {
    console.log("element name:::" + element);
    const type = element.match(/^[^ :]+/);
    console.log("type:::" + type);
    if (type != "input") {
      console.log(`What are u trying to do with ${type}!`);
    } else {
      const tmp = element.match(/[ :]+[^ :]+/);
      console.log("tmp:::" + tmp);
      const elementName = String(tmp).match(/[^ :]+/);
      console.log("elementName:::" + elementName);
      console.log(
        "elements[String(elementName)]:::" +
          pageFixture.elements[String(elementName)]
      );
      await pageFixture.page
        .locator(pageFixture.elements[String(elementName)].selector)
        .type(txt);
      await pageFixture.page.waitForTimeout(2000);
    }
  }
});
When("I {action} {element}", async function (action, element) {
  if (action != "click") {
    throw new Error(`Why the hell do you want to ${action} a ${element}!`);
  }
  try {
    const tmp = element.match(/[ :]+[^ :]+/);
    console.log("tmp:::" + tmp);
    const elementName = String(tmp).match(/[^ :]+/);
    console.log("elementName:::" + elementName);
    await pageFixture.page
      .locator(pageFixture.elements[String(elementName)].selector)
      .click();
    await pageFixture.page.waitForTimeout(2000);
  } catch (error) {
    console.error(error.message);
  }
});
Then(
  "I {action} {project}.{page} successfully!",
  async function (action, project, pagename) {
    if (action == "navigate to") {
      await pageFixture.loadPage(project, pagename);
      await expect(pageFixture.page).toHaveURL(pageFixture.url);
      await pageFixture.page.waitForTimeout(2000);
    } else {
      console.log("What else u want to check for url!");
    }
  }
);
