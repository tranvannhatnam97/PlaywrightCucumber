import { Page, expect } from "@playwright/test";
import { PimAbstractPage } from "../pimAbstractPage";
export class HomePage extends PimAbstractPage {
  secondLabel = undefined;
  url = "https://test-pim.ichiba.net/ws-nam/";
  constructor(page: Page) {
    super(page);
    this.secondLabel = this.page.locator(
      '//h2[contains(text(),"Subscribe Source")]'
    );
  }
  async check(): Promise<void> {
    await super.check();
    await expect(this.secondLabel).toBeVisible();
  }
}
