import { Page, expect } from "@playwright/test";
import { HomePage } from "./homePage";
export class TradingCatalogPage extends HomePage {
  secondLabel = undefined;
  topLabel = undefined;
  url = "https://test-pim.ichiba.net/ws-nam/#";
  constructor(page: Page) {
    super(page);
    this.topLabel = this.page.locator(
      '//h1[contains(text(),"Tradding Catalog")]'
    );
  }
  async check(): Promise<void> {
    await super.check();
    await expect(this.topLabel).toBeVisible();
  }
}
