const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      "baseUrl" : "https://gorest.co.in",
      "apiKey": "63d40b00fe39f422bf7a73e9862f0eb7868436fe09305eaec32a44dbce7a0e59",
      "usersEndPoint": "/public/v2/users/",
      "userPostsNestedResource": "/posts",
      "userCommentsNestedResource": "/comments",
      "userToDosNestedResource": "/todos"
    }
  },
});
