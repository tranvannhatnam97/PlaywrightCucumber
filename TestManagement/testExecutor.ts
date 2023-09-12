import data from "./TestSets/test_mapping.json";
import { exec } from "child_process";
const HOOK_PATH = "src/hooks/hooks.ts";
async function executeTestSets(testSets) {
  await Promise.all(
    testSets.map(async (testSet) => {
      await executeTestSet(testSet);
    })
  );
}
async function executeTestSet(testSet) {
  var path_str = " ";
  var req_str = "";
  for (const path of testSet.paths) {
    path_str = path_str + path + " ";
  }
  for (const step of testSet.steps) {
    path_str = path_str + " -r " + step;
  }
  var command = `npx cucumber-js -c cucumber.json ${path_str} ${req_str} -r ${HOOK_PATH} -f html:test-results/html/${testSet.tc_id}.html -f json:test-results/json/${testSet.tc_id}.json`;
  await exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("Error:", error);
    }
    // Print the output
    if (stderr) {
      console.error("Stderr:", stderr);
    }
    console.log(`Command output: ${stdout}`);
  });
}

executeTestSets(data);
