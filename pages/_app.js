import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbt7wcbt1uux01ufbdlg5aui/master',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    
  );
}

export default MyApp;
