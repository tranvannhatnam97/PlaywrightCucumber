import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export abstract class PimAbstractPage extends AbstractPage {
  workspaceMenu = undefined;
  tradingCatalogMenu = undefined;
  crawlerCatalogMenu = undefined;
  settingMenu = undefined;
  expandMenu = undefined;
  countryTopHeader = undefined;
  languageTopHeader = undefined;
  currencyTopHeader = undefined;
  notifyTopHeader = undefined;
  helpTopHeader = undefined;
  profileTopHeader = undefined;
  constructor(page: Page) {
    super(page);
  }
  async check(): Promise<void> {
    await console.log("title:::" + (await this.page.title()));

    await expect(await this.page.title()).toContain("PIM | iChiba Global");
  }
  async checkWorkspaceWithSlugName(slugName) {
    await expect(this.page.url()).toContain(slugName);
  }
}
