const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter', // For HTML Reports

  e2e: {
    setupNodeEvents(on, config) {
      // implement event listeners
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
