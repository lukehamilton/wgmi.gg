/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injected, walletconnect, walletlink } from "../lib/connectors";
import { useEagerConnect, useInactiveListener } from "../hooks/web3";

enum ConnectorNames {
  Injected = "Injected",
  WalletConnect = "WalletConnect",
  WalletLink = "WalletLink"
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.WalletLink]: walletlink
};

const connectorLabels: { [connectorName in ConnectorNames]: String } = {
  [ConnectorNames.Injected]: "MetaMask",
  [ConnectorNames.WalletConnect]: "WalletConnect",
  [ConnectorNames.WalletLink]: "Coinbase Wallet"
};

const connectorImages: { [connectorName in ConnectorNames]: String } = {
  [ConnectorNames.Injected]: "/images/logo-metamask.png",
  [ConnectorNames.WalletConnect]: "/images/logo-walletconnect.svg",
  [ConnectorNames.WalletLink]: "/images/logo-coinbase.jpg"
};

const ConnectWallet = () => {
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error
  } = useWeb3React<Web3Provider>();

  const [open, setOpen] = useState<any>(false);
  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <>
      {triedEager && (
        <button
          onClick={() => setOpen(true)}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Connect
        </button>
      )}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  {/* <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div> */}
                  <div className="mt-0 text-center sm:mt-0">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Connect to a wallet
                    </Dialog.Title>
                    <div className="mt-6">
                      {Object.keys(connectorsByName).map(name => {
                        const currentConnector = connectorsByName[name];
                        const activating =
                          currentConnector === activatingConnector;
                        const connected = currentConnector === connector;
                        const disabled =
                          !triedEager ||
                          !!activatingConnector ||
                          connected ||
                          !!error;
                        return (
                          <button
                            type="button"
                            className="mt-4 inline-flex justify-center w-3/4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                            onClick={() => {
                              setActivatingConnector(currentConnector);
                              activate(connectorsByName[name], error => {
                                if (error) {
                                  setActivatingConnector(undefined);
                                }
                              });
                            }}
                          >
                            {connectorLabels[name]}
                            <img
                              className="inline-block h-4 w-4 ml-2"
                              src={connectorImages[name]}
                              alt={connectorLabels[name]}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Go back to dashboard
                  </button>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ConnectWallet;
