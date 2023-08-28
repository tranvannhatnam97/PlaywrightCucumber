module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["src/test/features/ichiba_login.feature"],
    dryRun: false,
    require: ["src/test/steps/free.ts", "src/hooks/hooks.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
  },
};
