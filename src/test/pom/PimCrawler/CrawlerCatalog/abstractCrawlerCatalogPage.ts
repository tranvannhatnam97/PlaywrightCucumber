import { Page, expect } from "@playwright/test";
import { AbstractPimPage } from "../abstractPimPage";
export abstract class AbstractCrawlerCatalogPage extends AbstractPimPage {
  menuLevelTwo = undefined;
  menuLevelTwoArrow = undefined;
  subsribeSourceMenuItem = undefined;
  manageSourceMenuItem = undefined;
  manageTopicMenuItem = undefined;
  productsMenuItem = undefined;
  catalogHierarchyMenuItem = undefined;
  blacklistMenuItem = undefined;
  constructor(page: Page, slugName?: string) {
    super(page, slugName);
    this.menuLevelTwo = this.page.locator(".MenuLevel2_main__mReTv");
    this.menuLevelTwoArrow = this.page.locator(
      '//div[contains(@class, "MenuLevel2_close__aks6k")]//*[contains(@class, "arrow")]'
    );
    this.subsribeSourceMenuItem = this.menuLevelTwo.$(
      'xpath=//div[@id="subscribeSource"]'
    );
    this.manageSourceMenuItem = this.menuLevelTwo.$(
      'xpath=//div[@id="manageSource"]'
    );
    this.manageTopicMenuItem = this.menuLevelTwo.$(
      'xpath=//div[@id="manageTopic"]'
    );
    this.productsMenuItem = this.menuLevelTwo.$('xpath=//div[@id="products"]');
    this.catalogHierarchyMenuItem = this.menuLevelTwo.$(
      'xpath=//div[@id="catalogHierarchy"]'
    );
    this.blacklistMenuItem = this.menuLevelTwo.$(
      'xpath=//div[@id="blacklist"]'
    );
  }
  async checkIn() {
    super.checkIn();
    await expect(this.menuLevelTwo).toBeVisible();
    await expect(this.menuLevelTwoArrow).toBeVisible();
    await expect(this.subsribeSourceMenuItem).toBeVisible();
    await expect(this.manageSourceMenuItem).toBeVisible();
    await expect(this.manageTopicMenuItem).toBeVisible();
    await expect(this.productsMenuItem).toBeVisible();
    await expect(this.catalogHierarchyMenuItem).toBeVisible();
    await expect(this.blacklistMenuItem).toBeVisible();
  }
}
