import React, { Fragment, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Badge, Flex, Text } from "@chakra-ui/react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

const Account = () => {
  const { account, library } = useWeb3React();
  const [ensName, setENSName] = useState(null);
  const [fetchedENS, setFetchedENS] = useState(false);

  useEffect(() => {
    library.lookupAddress(account).then(result => {
      setENSName(result);
      setFetchedENS(true);
    });
  }, [account]);

  const shortAccount = `${account.substring(0, 6)}...${account.substring(
    account.length - 4
  )}`;
  const displayName = ensName ? ensName : shortAccount;

  return (
    <>
      <Badge colorScheme="purple">
        <Flex alignItems={"center"} py={1}>
          <Text mr={1}>{displayName}</Text>
          <Jazzicon diameter={25} seed={jsNumberForAddress(account)} />
        </Flex>
      </Badge>
    </>
  );
};

export default Account;
