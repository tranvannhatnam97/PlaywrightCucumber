import * as XLSX from "xlsx";
import { CellObject } from "xlsx";

const workbook: XLSX.WorkBook = XLSX.readFile(
  require.resolve("../test/data/SauceDemo.xlsx")
);
const worksheet: XLSX.WorkSheet = workbook.Sheets["HomePage"];
const jsonData = XLSX.utils.sheet_to_json(worksheet);
console.log(jsonData);
