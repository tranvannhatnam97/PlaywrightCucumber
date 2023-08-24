import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { defineParams } from "../commons/Define";
let page: Page;
let browser: Browser;
defineParams();
BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  pageFixture.page = page;
});
AfterAll(async function () {
  await page.close();
  await browser.close();
});
