import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export abstract class AbstractPimPage extends AbstractPage {
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
  title = "PIM | iChiba Global";
  constructor(page: Page) {
    super(page);
  }
  async checkIn(): Promise<void> {
    await expect.soft(await this.page.title()).toContain(this.title);
  }
  async checkWorkspaceWithSlugName(slugName) {
    await expect(this.page.url()).toContain(slugName);
  }
}
