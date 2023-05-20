
import { PUBLIC_HASURA_ADMIN_SECRET, PUBLIC_GITHUB_ACCESS_CODE, PUBLIC_GITHUB_API_ENDPOINT } from "$env/static/public";
import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core';



const httpLink = new HttpLink({
  uri: "https://planet-of-the-bugs.hasura.app/v1/graphql",
  credentials: "include",
  headers: {
    "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
    "Authorization": ""
  },
});

type HttpCredentials = "include" | "omit" | "same-origin";


const githubHttpLink = ({ Authorization, uri }) => {
  return new HttpLink({
    uri,
    credentials: "same-origin",
    headers: {
      Authorization,
   
    }
  });
}


export const githubClient = (options) => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    credentials: "include",
    link: githubHttpLink(options)
  });
}

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  link: httpLink,
});

export class GithubApi {
  constructor(options) {
    this.options = options;
    this.session = null;
    this.client = null;
  }

  setSession(session) {
    this.session = session;
    this.client = new ApolloClient({
      cache: new InMemoryCache(),
      credentials: "include",
      link: this.createHttpLink(this.options),
    });
  }

  getGithubClient () {
    return this.client;
  }

  createHttpLink({ Authorization, uri }) {
    return new HttpLink({
      uri,
      credentials: "same-origin",
      headers: {
        Authorization: `Bearer ${this.session}`
      },
    });
  }
}

export const GITHUB_API = new GithubApi({
  Authorization: null,
  uri: PUBLIC_GITHUB_API_ENDPOINT,
});


export default apolloClient;