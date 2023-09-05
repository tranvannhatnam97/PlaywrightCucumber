import { Page } from "@playwright/test";
import { getPOMFromFile } from "../commons/convertData";
class PageFixture {
  //@ts-ignore
  page = undefined as Page;
  url = undefined;
  name = undefined;
  requests = [];
  elements = {};
  constructor() {}
  loadPage = async function (project: string, pagename: string) {
    var projectObj = getPOMFromFile(project);
    this.elements = projectObj[pagename].elements;
    this.name = pagename;
    this.url = projectObj[pagename].url;
  };
  collectRequests = async function () {
    this.request = [];

    // await this.page.route("**/*", async (route: any) => {
    //   await this.requests.push(route.request());
    //   await route.continue();
    // });
    // await Promise.all(this.requests.map((request) => request.response()));

    await this.page.on(
      "request",
      async (request) => await this.requests.push(request)
    );
  };
}
export let pageFixture = new PageFixture();
