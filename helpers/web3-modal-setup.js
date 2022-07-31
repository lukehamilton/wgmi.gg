import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const ALCHEMY_MAINNET_RPC = process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_RPC;

const web3ModalSetup = () =>
  new Web3Modal({
    network: "mainnet", // Optional. If using WalletConnect on xDai, change network to "xdai" and add RPC info below for xDai chain.
    cacheProvider: true, // optional
    theme: "light", // optional. Change to "dark" for a dark theme.
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          rpc: {
            1: ALCHEMY_MAINNET_RPC
          }
        }
      }
    }
  });

export default web3ModalSetup;
