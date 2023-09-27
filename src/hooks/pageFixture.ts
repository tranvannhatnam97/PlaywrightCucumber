import { Page } from "@playwright/test";
import { getPOMFromFile } from "../commons/convertData";
class PageFixture {
  //@ts-ignore
  page = undefined as Page;
  url = undefined;
  name = undefined;
  elements = {};
  constructor() {}
  loadPage = async function (project: string, pagename: string) {
    var projectObj = getPOMFromFile(project);
    this.elements = projectObj[pagename].elements;
    this.name = pagename;
    this.url = projectObj[pagename].url;
  };
}
export let pageFixture = new PageFixture();
