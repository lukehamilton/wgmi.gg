import { ApolloProvider } from "@apollo/client";
// import {
//   Web3ReactProvider,
//   useWeb3React,
//   UnsupportedChainIdError
// } from "@web3-react/core";
// import { ThemeProvider } from "next-themes";
import { useApollo } from "../lib/apollo-client";
import { Web3Provider } from "@ethersproject/providers";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";

import "@rainbow-me/rainbowkit/styles.css";

// import "tailwindcss/tailwind.css";
// import { EthersAppContext } from "eth-hooks/context";
// import "../styles/global/styles.scss";
import Layout from "../components/layout";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ apiKey: "L5RtQ25viZAGFha-aS2qZWP-1ZFmLOiy" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

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
    // <Web3ReactProvider getLibrary={getLibrary}>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
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
      </RainbowKitProvider>
    </WagmiConfig>
    // </Web3ReactProvider>
  );
}

export default MyApp;
