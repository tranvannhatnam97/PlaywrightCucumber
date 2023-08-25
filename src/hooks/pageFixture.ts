import { Page } from "@playwright/test";
import pageJson from "../pom/login_pom.json";
class PageFixture {
  //@ts-ignore
  page = undefined as Page;
  elements = {};
  constructor() {
    this.elements = pageJson.elements;
  }
  loadElements = async () => {};
}
console.log(pageJson.url);
export let pageFixture = new PageFixture();
