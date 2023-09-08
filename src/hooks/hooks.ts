import { BeforeAll, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page, webkit, firefox } from "@playwright/test";
import { pageFixture } from "./pageFixture";
// import { defineParams } from "../commons/define";
let page: Page;
let browser: Browser;
setDefaultTimeout(60 * 1000 * 2);
// defineParams();
BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  pageFixture.page = page;
});
AfterAll(async function () {
  await page.close();
  await browser.close();
});
