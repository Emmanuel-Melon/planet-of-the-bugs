import {
    PUBLIC_HASURA_ADMIN_SECRET,
    PUBLIC_GITHUB_ACCESS_CODE,
    PUBLIC_GITHUB_API_ENDPOINT,
    PUBLIC_HASURA_GRAPHQL_ENDPOINT,
  } from "$env/static/public";
module.exports = {
    client: {
      service: {
        name: "hasura",
        url: PUBLIC_HASURA_GRAPHQL_ENDPOINT,
        headers: {
          "x-hasura-admin-secret":
          PUBLIC_HASURA_ADMIN_SECRET,
          "x-hasura-role": "admin",
        },
      },
    },
  };