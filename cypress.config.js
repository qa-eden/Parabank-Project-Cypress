const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure=true,
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter', // For HTML Reports
  
  e2e: {
    baseUrl:'https://parabank.parasoft.com',
    defaultCommandTimeout=100000,
    setupNodeEvents(on, config) {
      // implement event listeners
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
