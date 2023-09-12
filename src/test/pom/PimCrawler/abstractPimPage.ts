import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export abstract class AbstractPimPage extends AbstractPage {
  slugName = undefined;
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

  abstract url: string;
  constructor(page: Page, slug_name?: string) {
    super(page);
    if (slug_name !== undefined) {
      this.slugName = slug_name;
    }
    this.tradingCatalogMenu = this.page.locator(
      '//div[@class="MenuLevel1Items_root__nbfbd"]/div[1]'
    );
    this.crawlerCatalogMenu = this.page.locator(
      '//div[@class="MenuLevel1Items_root__nbfbd"]/div[2]'
    );
    this.settingMenu = this.page.locator(
      '//div[@class="MenuLevel1Items_root__nbfbd"]/div[3]'
    );
    this.countryTopHeader = this.page.locator(
      '//div[@class="Header_root__KLWFv"]/div[1]/div[1]/div[1]'
    );
    this.languageTopHeader = this.page.locator(
      '//div[@class="Header_root__KLWFv"]/div[1]/div[2]/div[1]'
    );
    this.currencyTopHeader = this.page.locator(
      '//div[@class="Header_root__KLWFv"]/div[1]/div[3]/div[1]'
    );
    this.notifyTopHeader = this.page.locator(
      '//div[@class="Header_root__KLWFv"]/div[1]/div[5]/div[1]'
    );
    this.helpTopHeader = this.page.locator(
      '//div[@class="Header_root__KLWFv"]/div[1]/div[5]/div[2]'
    );
    this.profileTopHeader = this.page.locator(
      '//div[@class="Header_root__KLWFv"]/div[1]/div[5]/div[3]'
    );
  }
  async checkIn(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
    if (this.slugName != undefined) {
      await expect(await this.page.url()).toEqual(this.url);
    }
    await expect.soft(await this.page.title()).toContain(this.title);
    await expect(this.tradingCatalogMenu).toBeVisible();
    await expect(this.crawlerCatalogMenu).toBeVisible();
    await expect(this.settingMenu).toBeVisible();
    await expect(this.languageTopHeader).toBeVisible();
    await expect(this.currencyTopHeader).toBeVisible();
    await expect(this.notifyTopHeader).toBeVisible();
    await expect(this.helpTopHeader).toBeVisible();
    await expect(this.profileTopHeader).toBeVisible();
  }
  async checkWorkspaceWithSlugName(slugName) {
    await expect(await this.page.url()).toContain(slugName);
  }
  async gotoTradingCatalog() {
    await this.tradingCatalogMenu.click();
  }
  async gotoCrawlerCatalog() {
    await this.tradingCatalogMenu.click();
  }
  async gotoSetting() {
    await this.tradingCatalogMenu.click();
  }
}
