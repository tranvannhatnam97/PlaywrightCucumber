import { Page, expect } from "@playwright/test";
import { AbstractPimPage } from "../abstractPimPage";
import { queryDatabase } from "../../../../commons/postgre";
export class HomePage extends AbstractPimPage {
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
    return api_result;
  }
  async getSourceByDatabase() {
    var sources = [];
    var origins = [];
    var database_result = [];
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
    var originsSet = new Set(origins);
    if (sources.length != origins.length) {
      throw new Error("Some thing wrong with your query or database!");
    }
    try {
      for (const origin of Array.from(originsSet)) {
        var originObj = { name: origin, sources: [] };
        for (var i = 0; i < sources.length; i++) {
          if (origins[i] == origin) {
            const sourceObj = { name: sources[i] };
            originObj.sources.push(sourceObj);
          }
        }
        database_result.push(originObj);
      }
      return database_result;
    } catch (error) {
      console.log(error.message);
    }
  }
  async getSourcesByUI() {
    const originTable = await this.page.$(
      '//div[@class="SubscribeSourceFilter_root__QR71x"]/following-sibling::div'
    );
    const originRows = await originTable.$$("xpath=/div");
    var ui_result = [];
    for (const originRow of originRows) {
      const origin = await (await originRow.$("xpath=/div[1]")).textContent();
      var originObj = { name: origin, sources: [] };
      const sourceTable = await originRow.$("xpath=/div[2]");
      const sourceRows = await sourceTable.$$("xpath=/div/span");
      for (const sourceRow of sourceRows) {
        const source = await sourceRow.textContent();
        var sourceObj = { name: source };
        originObj.sources.push(sourceObj);
      }
      ui_result.push(originObj);
    }
    return ui_result;
  }
}
