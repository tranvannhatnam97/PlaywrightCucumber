import { Page, expect } from "@playwright/test";
import { AbstractPage } from "../abstractPage";
export class WorkspacePage extends AbstractPage {
  label = undefined;
  url = "https://test-pim.ichiba.net/workspace/";
  constructor(page: Page) {
    super(page);
    this.label = this.page.locator('//h1[contains(text(),"workspaceSetup")]');
  }
  async check(): Promise<void> {
    await expect(this.label).toBeVisible();
  }
  async access(): Promise<void> {}
  async chooseNameSpaceWithName(workspaceName) {
    await this.page
      .locator(
        `//p[contains(text(),"createWorkspace")]/../../following-sibling::*//p[contains(text(),"${workspaceName}")]`
      )
      .click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}
