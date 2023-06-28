const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      "baseUrl" : "https://gorest.co.in",
      "Authorization": "Bearer 63d40b00fe39f422bf7a73e9862f0eb7868436fe09305eaec32a44dbce7a0e59",
      "usersEndPoint": "/public/v2/users/",
      "postsEndPoint": "/public/v2/posts/",
      "commentsEndPoint": "/public/v2/comments/",
      "todosEndPoint": "/public/v2/todos/",
      "postsNestedResource": "/posts",
      "commentsNestedResource": "/comments",
      "todosNestedResource": "/todos"
    }
  },
});
