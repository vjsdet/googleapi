const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/reports", 
reportPath: "cypress/reports"
});