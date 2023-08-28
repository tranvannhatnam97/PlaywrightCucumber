import * as fs from "fs";
import * as XLSX from "xlsx";
import { CellObject } from "xlsx";
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

// Usage example
// const folderPath: string = "src/test/data";
// const filesInFolder: string[] = readFolder(folderPath);
// console.log(filesInFolder);

function convert(folderPath) {
  var res = {};
  const fileNames = readFolder(folderPath);
  console.log(fileNames);

  for (var file of fileNames) {
    console.log(file);
    var projectName = file.replace(".xlsx", "");
    res[String(projectName)] = {};
    const workbook: XLSX.WorkBook = XLSX.readFile(
      require.resolve(`../test/data/${file}`)
    );
    const worksheet: XLSX.WorkSheet = workbook.Sheets["HomePage"];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    console.log(jsonData);
  }

  console.log(res);
}
convert("src/test/data");
