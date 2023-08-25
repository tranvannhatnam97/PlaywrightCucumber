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

Given("I {action} {url}", async function (action, url) {
  if (action == "go to") {
    await pageFixture.page.goto(url);
    // await pageFixture.loadElements();
    console.log("elements:::" + JSON.stringify(pageFixture.elements));
  }
});

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
        .locator(pageFixture.elements[String(elementName)].locator)
        .type(txt);
      await pageFixture.page.waitForTimeout(5000);
    }
  }
});
