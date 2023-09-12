import { Page, expect } from "@playwright/test";
import { HomePage } from "./homePage";
export class TradingCatalogPage extends HomePage {
  secondLabel = undefined;
  topLabel = undefined;
  constructor(page: Page, slugName?: string) {
    super(page, slugName);
    this.url = `https://test-pim.ichiba.net/$slugName/#`;
    this.topLabel = this.page.locator(
      '//h1[contains(text(),"traddingCatalog")]'
    );
  }
  async checkIn(): Promise<void> {
    await super.checkIn();
    await expect(this.topLabel).toBeVisible();
  }
}
