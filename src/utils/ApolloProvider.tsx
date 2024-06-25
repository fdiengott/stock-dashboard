import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const token = process.env.SERVER_TOKEN;

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        cache: new InMemoryCache(),
        link: createHttpLink({
            uri: "https://mosaic-mock.docker.direct/gql/query",
            headers: {
                authorization: `Bearer ${token}`,
            },
        }),
    });
};
export default createApolloClient;
