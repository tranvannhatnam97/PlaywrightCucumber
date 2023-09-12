import { Page, expect } from "@playwright/test";
import { AbstractCrawlerCatalogPage } from "./abstractCrawlerCatalogPage";

export class CrawlerCatalogPage extends AbstractCrawlerCatalogPage {
  url: string;
  constructor(page: Page, slugName?: string) {
    super(page, slugName);
    this.url = `https://test-pim.ichiba.net/${slugName}/#`;
  }
  async checkIn() {
    super.checkIn();
  }
}
