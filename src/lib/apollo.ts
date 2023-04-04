import { PUBLIC_HASURA_ADMIN_SECRET } from "$env/static/public";
import { ApolloClient, InMemoryCache } from "@apollo/client/core/core.cjs";
import { HttpLink } from "@apollo/client/link/http/http.cjs";

const httpLink = new HttpLink({
  uri: "https://planet-of-the-bugs.hasura.app/v1/graphql",
  credentials: "include",
  headers: {
    "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
  },
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  link: httpLink,
});

export default apolloClient;
