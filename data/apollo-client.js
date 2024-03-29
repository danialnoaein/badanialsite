import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbt7wcbt1uux01ufbdlg5aui/master",
  cache: new InMemoryCache(),
});

export default client;
