import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { expect } from "@playwright/test";
When(
  "I choose workspace with workspace name {string}",
  async function (workspaceName) {
    await pageFixture.collectRequests();
    await pageFixture.page
      .locator(
        `//p[contains(text(), "Create workspace")]/../../following-sibling::div//*[contains(text(), "${workspaceName}")]`
      )
      .click();
    await pageFixture.page.waitForTimeout(5000);
  }
);
Then(
  "I {action} {project}.{page} with slug-name {string}",
  async function (action, project, pagename, slugName) {
    if (action == "navigate to") {
      await pageFixture.loadPage(project, pagename);
      await expect(pageFixture.page.url()).toContain(
        String(pageFixture.url).replace(":slug-name", slugName)
      );
      await pageFixture.page.waitForTimeout(2000);
    } else {
      console.log("What else u want to check for url!");
    }
  }
);
