const { join } = require("path");

/** @type {import("@graphql-codegen/cli").CodegenConfig} */
const codegen = {
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

/** @type {import("graphql-config").IGraphQLConfig} */
const config = {
  schema: join(__dirname, "schema.graphql"),
  documents: [join(__dirname, "src/**/*.{ts,tsx}")],
  extensions: {
    codegen,
  },
};

module.exports = config;
