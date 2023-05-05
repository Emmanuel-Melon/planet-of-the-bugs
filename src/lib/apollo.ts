
import { PUBLIC_HASURA_ADMIN_SECRET } from "$env/static/public";
import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core';
import { page } from "$app/stores"
import { signIn, signOut } from "@auth/sveltekit/client"


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
    Authorization: null,
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
