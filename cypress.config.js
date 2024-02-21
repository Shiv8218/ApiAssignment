module.exports = {
  reporter: 'cypress-mochawesome-reporter',  // for_report

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);   // for_report

    },
  },
};
