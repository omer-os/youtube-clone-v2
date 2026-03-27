import { defineConfig } from "orval"

export default defineConfig({
  api: {

    input: {
      target: "http://localhost:3000/openapi/json",
      filters: {
        mode: "exclude",
        tags: ["Better Auth"]
      }
    },
    output: {
      mode: "tags-split",
      target: "src/lib/api",
      schemas: "src/lib/api/model",
      client: "svelte-query",
      httpClient: "fetch",
      baseUrl: "http://localhost:3000",
      // override: {
      //   mutator: {
      //     path: "src/lib/mutator.ts",
      //     name: "customFetch",
      //   },
      // },
    },
  },


})
