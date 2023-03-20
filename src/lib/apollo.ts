import { PUBLIC_HASURA_ADMIN_SECRET } from "$env/static/public";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
  HttpLink,
// @ts-ignore
} from "@apollo/client/core/core.cjs";
import { setClient, query, mutation } from "svelte-apollo";

const httpLink = new HttpLink({
    uri: "https://planet-of-the-bugs.hasura.app/v1/graphql",
    credentials: "include",
    headers: {
      "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
    },
  });

  export const client = new ApolloClient({
    cache: new InMemoryCache(),
    credentials: "include",
    link: httpLink,
  });