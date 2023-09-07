import { Page, expect } from "@playwright/test";
export abstract class AbstractPage {
  abstract url: string;
  page = undefined as Page;
  abstract check(): Promise<void>;
  async access(): Promise<void> {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
    await this.check();
  }
  constructor(page: Page) {
    this.page = page;
  }
}
