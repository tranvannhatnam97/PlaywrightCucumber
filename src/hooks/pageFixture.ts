import { Page } from "@playwright/test";
import pageJson from "../pom/saucedemo/info.json";
class PageFixture {
  //@ts-ignore
  page = undefined as Page;
  url = undefined;
  name = undefined;

  elements = {};
  constructor() {}
  loadPage = async function (project: string, pagename: string) {
    this.elements = pageJson[project][pagename].elements;
    this.name = pagename;
    this.url = pageJson[project][pagename].url;
  };
}
export let pageFixture = new PageFixture();
