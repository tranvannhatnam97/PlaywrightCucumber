import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";
let page: Page;
let browser: Browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  pageFixture.page = page;
});
