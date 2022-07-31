const ALCHEMY_MAINNET_RPC = process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_RPC;
const ALCHEMY_RINKEBY_RPC = process.env.NEXT_PUBLIC_ALCHEMY_RINKEBY_RPC;

export const NETWORKS = {
  localhost: {
    name: "localhost",
    color: "#666666",
    chainId: 31337,
    blockExplorer: "",
    rpcUrl:
      "http://" +
      (global.window ? window.location.hostname : "localhost") +
      ":8545"
  },
  mainnet: {
    name: "mainnet",
    color: "#ff8b9e",
    chainId: 1,
    rpcUrl: ALCHEMY_MAINNET_RPC,
    blockExplorer: "https://etherscan.io/"
  },
  rinkeby: {
    name: "rinkeby",
    color: "#e0d068",
    chainId: 4,
    rpcUrl: ALCHEMY_RINKEBY_RPC,
    faucet: "https://faucet.rinkeby.io/",
    blockExplorer: "https://rinkeby.etherscan.io/"
  }
};
