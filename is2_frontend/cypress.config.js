const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vunegs",
  viewportWidth: 1920,
  viewportHeight: 1080,
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    backendBaseURL: "http://localhost:5000",
    setupNodeEvents(on, config) {
      

    }
  },
});
