import { ApolloProvider } from "@apollo/client";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import { ThemeProvider } from "next-themes";
import { useApollo } from "../lib/apollo-client";
import { Web3Provider } from "@ethersproject/providers";

// import "tailwindcss/tailwind.css";
// import { EthersAppContext } from "eth-hooks/context";
import "../styles/global/styles.scss";

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
        <ThemeProvider
          attribute="class"
          storageKey="nightwind-mode"
          defaultTheme="system"
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
