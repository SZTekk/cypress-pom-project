/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor")
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify")

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  require('cypress-mochawesome-reporter/plugin')(on);
  return config;
}


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/mochawesomeresults',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true
  },
  e2e: {
    setupNodeEvents,
    experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false,
    env:{
      url: "https://www.verizon.com/"
    },
    requestTimeout: 10000,
    defaultCommandTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    viewportHeight:526,
    viewportWidth: 1512
  }
});

