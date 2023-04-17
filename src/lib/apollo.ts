import { PUBLIC_HASURA_ADMIN_SECRET } from "$env/static/public";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  concat,
  ApolloLink
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

const httpLink = new HttpLink({
  uri: "https://planet-of-the-bugs.hasura.app/v1/graphql",
  credentials: "include",
  headers: {
    "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
  },
});

const githubHttpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  credentials: "omit",
  headers: {
    Authorization: process.env.GITHUB_ACCESS_TOKEN || null,
  }
})

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  link: httpLink,
});

export const githubClient =  new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  link: githubHttpLink
});

export default apolloClient;
