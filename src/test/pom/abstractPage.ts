import { Page, expect } from "@playwright/test";
export abstract class AbstractPage {
  abstract url: string;
  page = undefined as Page;
  abstract checkIn(): Promise<void>;
  async access(): Promise<void> {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
    await this.checkIn();
  }
  constructor(page: Page) {
    this.page = page;
  }
  async setRequestsByUrl(url) {
    this.page["requests"] = [];
    await this.page.on("request", async (request: any) => {
      if ((await request.url()) == url) {
        await this.page["requests"].push(request);
      }
    });
    await this.page.waitForLoadState("networkidle");
  }
  async getFirstApiResponseBody() {
    if (this.page["requests"].length == 0) {
      throw new Error("No request was intercepted!");
    }
    try {
      const firstRequest = this.page["requests"][0];
      const response = await firstRequest.response();
      const responseBody = await response.text();
      const body = await JSON.parse(responseBody);
      return body;
    } catch (error) {
      console.log(error.message);
    }
  }
}
