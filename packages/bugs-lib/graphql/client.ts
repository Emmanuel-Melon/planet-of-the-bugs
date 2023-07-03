import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core';

const ApolloGraphQLClient = (options = {}) => {
    const { uri, headers } = options;
    const httpLink = new HttpLink({
        uri: uri,
        credentials: "include",
        headers,
    });

    return {
        init: () => {
            return new ApolloClient({
                cache: new InMemoryCache(),
                credentials: "include",
                link: httpLink,
            });
        },
    }
}

export default ApolloGraphQLClient;