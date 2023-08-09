import {
  PUBLIC_HASURA_ADMIN_SECRET,
  PUBLIC_GITHUB_API_ENDPOINT,
  PUBLIC_HASURA_GRAPHQL_ENDPOINT,
} from "$env/static/public";
import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client/core";

const httpLink = new HttpLink({
  uri: PUBLIC_HASURA_GRAPHQL_ENDPOINT,
  credentials: "include",
  headers: {
    "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
    Authorization: "",
  },
});

type HttpCredentials = "include" | "omit" | "same-origin";


const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  link: httpLink,
});

export default apolloClient;
