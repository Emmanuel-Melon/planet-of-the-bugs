import { PUBLIC_HASURA_ADMIN_SECRET, PUBLIC_HASURA_GRAPHQL_ENDPOINT } from "$env/static/public";
  
  module.exports = {
    overwrite: true,
    schema: [
      "src/lib/graphql/schema.graphql",
      {
        [PUBLIC_HASURA_GRAPHQL_ENDPOINT]: {
          headers: {
            "x-hasura-access-key": PUBLIC_HASURA_ADMIN_SECRET,
          },
        },
      },
    ],
    documents: [
      "src/**/*.{ts,tsx}",
      "!**/*.test.*",
      "!**/__mocks__/**/*",
      "!**/*.test.tsx",
      "!**/*.js",
      "!**/types/*",
      "!**/globalTypes.ts/*",
    ],
    hooks: {
      afterAllFileWrite: ["prettier --write"],
    },
    config: {
      dedupeOperationSuffix: true,
      preResolveTypes: true,
      immutableTypes: false,
      transformUnderscore: true,
      scalars: {
        uuid: "string",
        id: "string",
        int8: "string",
        bigint: "string",
        numeric: "number",
        varbit: "string",
        bit: "string",
        char: "string",
        varchar: "string",
        bool: "boolean",
        int: "number",
        int4: "number",
        jsonb: "Record<string, any>",
        _text: "string",
        date: "string",
        json: "Record<string, any>",
        citext: "string",
        timestamp: "string",
        float8: "number",
        timestamptz: "string",
      },
    },
    generates: {
      "src/lib/graphql/globalTypes.ts": {
        hooks: {
          afterAllFileWrite: ["prettier --write"],
        },
        plugins: ["typescript"],
      },
      "src/lib": {
        preset: "near-operation-file",
        presetConfig: {
          baseTypesPath: "graphql/globalTypes.ts",
          folder: "__generated__",
          extension: ".ts",
        },
        plugins: ["typescript-operations", "typescript-react-apollo"],
      },
      "src/lib/__mocks__/schema.json": {
        plugins: ["introspection"],
      },
    },
  };
  