import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 812,
  viewportWidth: 375,
  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on: never, config: never) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
