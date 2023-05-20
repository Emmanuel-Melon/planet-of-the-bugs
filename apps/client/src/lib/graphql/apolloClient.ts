import { PUBLIC_HASURA_ADMIN_SECRET, PUBLIC_HASURA_GRAPHQL_ENDPOINT, PUBLIC_HASURA_GRAPHQL_WS } from "$env/static/public";
import { HttpLink, InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client/core';
import type { NormalizedCacheObject } from '@apollo/client/core';
import { createClient } from "graphql-ws";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const isBrowser = typeof window !== "undefined";
let client: ApolloClient<NormalizedCacheObject> | null = null;

type HttpOptions = {
  headers?: {
    Authorization?: string;
    "x-hasura-admin-secret": string;
    "x-hasura-role"?: string;
  };
  token?: string;
};

const createLink = (options: HttpOptions = {}) => {
  return createHttpLink({
    uri: PUBLIC_HASURA_GRAPHQL_ENDPOINT,
    credentials: "include",
    headers: {
      ...options.headers,
      "x-hasura-admin-secret":
        PUBLIC_HASURA_ADMIN_SECRET,
      "x-hasura-role": "user",
      Authorization: "secret",
    },
  });
};

const httpLink = createLink({
  headers: {
    "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
    "x-hasura-role": "user",
  },
});

const wsLink = isBrowser
  ? new GraphQLWsLink(
    createClient({
      url: PUBLIC_HASURA_GRAPHQL_WS || "localhost:3000",
      connectionParams: {
        headers: {
          "x-hasura-admin-secret":
            PUBLIC_HASURA_ADMIN_SECRET,
          Authorization: "secret",
          "x-hasura-role": "user",
        },
      },
    })
  )
  : httpLink;

const splitLink = isBrowser
  ? split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  )
  : httpLink;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message: msg, extensions }) => {
      console.error("graphql error", msg);
      switch (extensions?.["code"]) {
        case "invalid-jwt":
          // perform logout
          break;
        default:
          return;
      }
    });
  }
  if (networkError) {
    console.error(`Network Error: ${networkError.message}`);
  }
});

/**
 * const apolloClient = new ApolloClient<NormalizedCacheObject>({
  cache: new InMemoryCache(),
  credentials: "include",
  link: httpLink,
});
 */
function create(initialState: any, options: Options = {}) {
  const client = new ApolloClient({
    connectToDevTools: !isBrowser,
    ssrMode: isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: splitLink,
    cache: new InMemoryCache().restore(initialState || {}),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });

  if (!isBrowser) {
    client.setLink(httpLink);
  }

  return client;
}

interface Options {
  token?: string;
}
export const setAuthToken = (token: string) => {
  const options: HttpOptions = {
    headers: {
      "x-hasura-admin-secret":
        PUBLIC_HASURA_ADMIN_SECRET,
      "x-hasura-role": "user",
      Authorization: "secret",
    },
  };

  if (client) {
    const newLink = createLink(options);

    client.resetStore();
    client.setLink(errorLink.concat(newLink));
  }
};

export function initApollo(
  initialState: Record<string, any> = {},
  options?: Options
) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  }
  // Reuse client on the client-side
  if (!client) {
    client = create(initialState, options);
  }

  return client;
}

export const apolloClient = initApollo();
