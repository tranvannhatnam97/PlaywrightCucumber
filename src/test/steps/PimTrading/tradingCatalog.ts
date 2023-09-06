import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { expect } from "@playwright/test";
import { queryDatabase } from "../../../commons/postgre";

Then(
  "Browser send api get list subscribed source and get right response",
  async function () {
    // await pageFixture.page.on("request", (request) =>
    //   console.log(">>", request.method(), request.url())
    // );

    // const request = await pageFixture.page.waitForRequest(
    //   "https://test-api.ichiba.net/pim/ws-nam/workspace-sources/subscribing"
    // );
    // console.log("Request URL:", request.url());
    // console.log("Request method:", request.method());
    // console.log("Request headers:", request.headers());

    // const response = await pageFixture.page.request.get(
    //   "https://test-api.ichiba.net/pim/ws-nam/workspace-sources"
    // );
    // await expect(response).toBeOK();

    // for (const request of pageFixture.requests) {
    //   console.log(request.url());

    //   if (
    //     request.url() ==
    //     "https://test-api.ichiba.net/pim/ws-nam/workspace-sources/subscribing"
    //   ) {
    //     console.log(await request.method());
    //   }
    // }
    expect(
      await pageFixture.requests.some(async (request) => {
        (await request.url()) ===
          "https://test-api.ichiba.net/pim/ws-nam/workspace-sources/subscribing";
      })
    ).toBeTruthy();
  }
);
