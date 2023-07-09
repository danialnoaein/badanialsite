import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbt7wcbt1uux01ufbdlg5aui/master",
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
