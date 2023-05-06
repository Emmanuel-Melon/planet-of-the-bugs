
import { PUBLIC_HASURA_ADMIN_SECRET, PUBLIC_GITHUB_ACCESS_CODE, PUBLIC_GITHUB_API_ENDPOINT } from "$env/static/public";
import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core';
import { page } from "$app/stores"
import { signIn, signOut } from "@auth/sveltekit/client"


const httpLink = new HttpLink({
  uri: "https://planet-of-the-bugs.hasura.app/v1/graphql",
  credentials: "include",
  headers: {
    "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
    "Authorization": ""
  },
});

const githubHttpLink = new HttpLink({
  uri: PUBLIC_GITHUB_API_ENDPOINT,
  credentials: "omit",
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
