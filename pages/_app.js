import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo-client";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
