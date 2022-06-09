import { ApolloProvider } from "@apollo/client";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
// import { ThemeProvider } from "next-themes";
import { useApollo } from "../lib/apollo-client";
import { Web3Provider } from "@ethersproject/providers";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";

// import "tailwindcss/tailwind.css";
// import { EthersAppContext } from "eth-hooks/context";
// import "../styles/global/styles.scss";
import Layout from "../components/layout";

const myTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.purple }
  },
  theme
);

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);

  library.pollingInterval = 12000;

  return library;
}

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  console.log("getLibrary", getLibrary);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ApolloProvider client={apolloClient}>
        {/* <ThemeProvider
          attribute="class"
          storageKey="nightwind-mode"
          defaultTheme="system"
        > */}
        <ChakraProvider theme={myTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
        {/* </ThemeProvider> */}
      </ApolloProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
