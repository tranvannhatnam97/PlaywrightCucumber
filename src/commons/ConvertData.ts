import * as fs from "fs";
import * as XLSX from "xlsx";
import { CellObject } from "xlsx";
const DATA_PATH = "src/test/data";
var res;
function readFolder(folderPath: string): string[] {
  const files: string[] = [];

  // Read the contents of the folder
  const fileNames: string[] = fs.readdirSync(folderPath);

  // Iterate over each file name
  for (const fileName of fileNames) {
    const filePath: string = `${folderPath}/${fileName}`;

    // Check if the current path is a file or directory
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      files.push(fileName);
    } else if (stat.isDirectory()) {
      // Recursively read the subfolder
      const subFolderFiles = readFolder(filePath);
      files.push(...subFolderFiles.map((subFile) => `${fileName}/${subFile}`));
    }
  }

  return files;
}
function isFileExists(folderPath: string, fileName: string): boolean {
  const filePath = `${folderPath}/${fileName}`;
  return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
}

function getPOMFromFolder(folderPath) {
  var res = {};
  const fileNames = readFolder(folderPath);
  console.log(fileNames);

  for (var file of fileNames) {
    console.log(file);
    var projectName = file.replace(".xlsx", "");
    var projectObj = getPOMFromFile(projectName);
    res[projectName] = projectObj;
  }
}
export function getPOMFromFile(projetName) {
  console.log("\nStart read pom file of project: " + projetName);

  if (!isFileExists(DATA_PATH, `${projetName}.xlsx`)) {
    throw new Error(`Project ${projetName} document file does not exist!`);
  }
  try {
    var projectObj = {};
    const workbook: XLSX.WorkBook = XLSX.readFile(
      `${DATA_PATH}/${projetName}.xlsx`
    );
    const infoSheet: XLSX.WorkSheet = workbook.Sheets["info"];
    const infoJson = XLSX.utils.sheet_to_json(infoSheet);
    // console.log("infoJson:" + JSON.stringify(infoJson));
    //@ts-ignore
    const pageNames = infoJson.map((page) => page.pageName);
    // console.log("pageNames:" + JSON.stringify(pageNames));
    var worksheetNames = workbook.SheetNames;
    worksheetNames = worksheetNames.filter((element) => element !== "info");
    try {
      for (var worksheetName of worksheetNames) {
        if (!pageNames.includes(worksheetName)) {
          throw new Error(`Page ${worksheetName} does not have info!`);
        }
        const url = infoJson.find((item) => item["pageName"] === worksheetName)[
          "url"
        ];
        // console.log("url:" + url);
        var pageObj = {};
        pageObj["url"] = url;
        var elementsObj = {};
        const elementsSheet: XLSX.WorkSheet = workbook.Sheets[worksheetName];
        const elementsJson = XLSX.utils.sheet_to_json(elementsSheet);
        // console.log("elementsJson:" + JSON.stringify(elementsJson));
        for (var element of elementsJson) {
          var elementObj = {};
          elementObj["selector"] = element["selector"];
          elementsObj[element["element"]] = elementObj;
        }
        pageObj["elements"] = elementsObj;
        projectObj[worksheetName] = pageObj;
      }
      // console.log("projectObj:::" + JSON.stringify(projectObj));

      return projectObj;
    } catch (error) {
      console.log(error.message);
    }
  } catch (error) {
    console.log(error.message);
  }
}

// getPOMFromFolder(DATA_PATH);
// getPOMFromFile("SauceDemo");
