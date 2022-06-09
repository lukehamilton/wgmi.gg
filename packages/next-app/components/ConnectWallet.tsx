import { Fragment, useState, useEffect } from "react";

import {
  Button,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image
} from "@chakra-ui/react";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Button variant="primary" onClick={onOpen} size="md">
        Connect Wallet
      </Button>
      <Modal onClose={onClose} size={"sm"} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect to a wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="3">
              {Object.keys(connectorsByName).map(name => {
                const currentConnector = connectorsByName[name];
                const activating = currentConnector === activatingConnector;
                const connected = currentConnector === connector;
                const disabled =
                  !triedEager || !!activatingConnector || connected || !!error;
                return (
                  <Button
                    variant="secondary"
                    iconSpacing="3"
                    onClick={() => {
                      setActivatingConnector(currentConnector);
                      activate(connectorsByName[name], error => {
                        if (error) {
                          setActivatingConnector(undefined);
                        }
                      });
                    }}
                    leftIcon={
                      <Image
                        boxSize="20px"
                        src={connectorImages[name]}
                        alt={connectorLabels[name]}
                      />
                    }
                  >
                    {connectorLabels[name]}
                  </Button>
                );
              })}
            </Stack>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectWallet;
