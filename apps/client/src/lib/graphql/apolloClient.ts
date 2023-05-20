import { PUBLIC_HASURA_ADMIN_SECRET } from "$env/static/public";
import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core';

const httpLink = new HttpLink({
  uri: "https://planet-of-the-bugs.hasura.app/v1/graphql",
  credentials: "include",
  headers: {
    "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
    "Authorization": ""
  },
});

type HttpLinkOptions = {
  Authorization: string,
  uri?: string
}

type GitHubHttplink = HttpLinkOptions & {
  Authorization: string | null,
}

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  link: httpLink,
});

export default apolloClient;
