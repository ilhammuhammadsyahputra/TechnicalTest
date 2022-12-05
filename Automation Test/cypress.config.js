const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
          },
          
            execTimeout: 100000,
            experimentalSessionAndOrigin: true,
            defaultCommandTimeout: 100000,
            requestTimeout: 100000,
            pageLoadTimeout: 100000,
            responseTimeout: 100000,
            retries: 2,
            video: false,
            viewportWidth: 1920,
            viewportHeight: 1080
  },

});
