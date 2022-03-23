import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useCallback
} from "react";
import { ethers } from "ethers";
import { Web3ModalSetup } from "../helpers";
import { NETWORKS } from "./constants";
import { useStaticJsonRPC } from "../hooks";

const Web3Context = createContext();

/// 📡 What chain are your contracts deployed to?
const initialNetwork = NETWORKS.localhost; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

const DEBUG = process.env.NODE_ENV === "development";

// 🛰 providers
const providers = [process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_RPC];

export const Web3 = ({ children }) => {
  // specify all the chains your app is available on. Eg: ['localhost', 'mainnet', ...otherNetworks ]
  // reference './constants.js' for other networks
  const networkOptions = [initialNetwork.name, "mainnet", "rinkeby"];
  console.log("networkOptions", networkOptions);
  console.log("providers", providers);
  const [web3Modal, setWeb3Modal] = useState();
  const [address, setAddress] = useState();
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);
  const [injectedProvider, setInjectedProvider] = useState();

  const targetNetwork = NETWORKS[selectedNetwork];
  console.log("targetNetwork", targetNetwork.rpcUrl);

  // 🔭 block explorer URL
  const blockExplorer = targetNetwork.blockExplorer;

  // load all your providers
  const localProvider = useStaticJsonRPC([targetNetwork.rpcUrl]);
  console.log("localProvider", localProvider);
  const mainnetProvider = useStaticJsonRPC(providers);
  console.log("mainnetProvider", mainnetProvider);

  console.log("targetNetwork", targetNetwork);

  const loadWeb3Modal = useCallback(async () => {
    try {
      const provider = await web3Modal.connect();
      setInjectedProvider(new ethers.providers.Web3Provider(provider));

      provider.on("chainChanged", chainId => {
        console.log(`chain changed to ${chainId}! updating providers`);
        setInjectedProvider(new ethers.providers.Web3Provider(provider));
      });

      provider.on("accountsChanged", () => {
        console.log(`account changed!`);
        setInjectedProvider(new ethers.providers.Web3Provider(provider));
      });

      // Subscribe to session disconnection
      provider.on("disconnect", (code, reason) => {
        console.log(code, reason);
        logoutOfWeb3Modal();
      });
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
  }, [web3Modal, setInjectedProvider]);

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    if (
      injectedProvider &&
      injectedProvider.provider &&
      typeof injectedProvider.provider.disconnect == "function"
    ) {
      await injectedProvider.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  useEffect(() => {
    setWeb3Modal(Web3ModalSetup());
  }, []);

  return (
    <Web3Context.Provider
      value={{ web3Modal, loadWeb3Modal, logoutOfWeb3Modal }}
    >
      <h1>{process.env.NODE_ENV}</h1>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
