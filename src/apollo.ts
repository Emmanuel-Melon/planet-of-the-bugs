

import { split, HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const admin = process.env.ADMIN_SECRET;

export function createApolloClient() {
  const headers = {
    "x-hasura-admin-secret": admin,
    "x-hasura-role": "user",
  };

console.log(HttpLink);

  const httpLink = new HttpLink({
    uri: "https://planet-of-the-bugs.hasura.app/v1/graphql",
    headers,
  });

  const wsLink = new WebSocketLink({
    uri: "wss://planet-of-the-bugs.hasura.app/graphql",
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  });

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );




  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache,
  });



  return client;
}