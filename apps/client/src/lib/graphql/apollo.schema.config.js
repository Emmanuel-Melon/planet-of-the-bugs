const envFile =
  process.env.NODE_ENV && process.env.NODE_ENV !== "production"
    ? `.env.${process.env.NODE_ENV}`
    : ".env";

import {
  PUBLIC_HASURA_ADMIN_SECRET,
  PUBLIC_HASURA_GRAPHQL_ENDPOINT,
} from "$env/static/public";
require("dotenv").config({ path: envFile });
module.exports = {
  client: {
    service: {
      name: "hasura",
      url: PUBLIC_HASURA_GRAPHQL_ENDPOINT,
      headers: {
        "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
        "x-hasura-role": "user",
      },
    },
  },
};
