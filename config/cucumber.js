const yargs = require("yargs");
const argv = yargs
  .option("paths", {
    description: "Paths of feature files",
    boolean: true,
  })
  .option("steps", {
    description: "Paths of typescript steps files",
    string: true,
  }).argv;
console.log("Pahts:" + JSON.stringify(argv.paths));
module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: argv.paths,
    dryRun: false,
    require: argv.steps,
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
  },
};
