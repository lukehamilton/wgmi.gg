import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";
import { useApollo } from "../lib/apollo-client";
// import "tailwindcss/tailwind.css";
import "../styles/global/styles.scss";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider
        attribute="class"
        storageKey="nightwind-mode"
        defaultTheme="system"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
