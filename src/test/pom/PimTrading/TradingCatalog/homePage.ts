import { Page, expect } from "@playwright/test";
import { PimAbstractPage } from "../pimAbstractPage";
import { queryDatabase } from "../../../../commons/postgre";
export class HomePage extends PimAbstractPage {
  secondLabel = undefined;
  url = "https://test-pim.ichiba.net/ws-nam/";
  constructor(page: Page) {
    super(page);
    this.secondLabel = this.page.locator(
      '//h2[contains(text(),"subscribeSource")]'
    );
  }
  async checkIn(): Promise<void> {
    await super.checkIn();
    await expect(this.secondLabel).toBeVisible();
  }
  async checkAPICorrectWithDatabase() {}
  async getSourcesByApi() {
    const response = await this.getFirstApiResponseBody();
    console.log(response);
    var api_result = [];
    for (const country of response) {
      var res_mem = { name: undefined, sources: [] };
      res_mem.name = country.name;
      for (const src of country.sources) {
        var src_res_mem = { name: undefined };
        src_res_mem.name = src.name;
        res_mem.sources.push(src_res_mem);
      }
      api_result.push(res_mem);
    }
    console.log("api_result:" + JSON.stringify(api_result));
  }
  async getSourceByDatabase() {
    var sources = [];
    var origins = [];
    const querySource =
      "select source.name " +
      "from crawler.origin " +
      "join crawler.source on " +
      "source.origin_id = origin.id " +
      "order by origin.name ASC, source.name DESC;";
    await queryDatabase(querySource)
      .then((res) => (sources = res))
      .catch((error) => console.error("Error:", error));
    const queryOrigin =
      "select origin.name " +
      "from crawler.origin " +
      "join crawler.source on " +
      "source.origin_id = origin.id " +
      "order by origin.name ASC, source.name DESC;";
    await queryDatabase(queryOrigin)
      .then((res) => (origins = res))
      .catch((error) => console.error("Error:", error));
    sources = sources.map((mem) => mem.name);
    origins = origins.map((mem) => mem.name);
    await console.log(sources);
    await console.log(origins);
    var database_result = [];
    if (sources.length != origins.length) {
      throw new Error("Some thing wrong with your query or database!");
    }
    try {
      console.log("database_result:::" + JSON.stringify(database_result));
    } catch (error) {
      console.log(error.message);
    }
  }
}
