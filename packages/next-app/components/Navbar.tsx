import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import { useWeb3React } from "@web3-react/core";

import Link from "next/link";

import * as React from "react";
import { FiHelpCircle, FiSearch, FiSettings } from "react-icons/fi";
import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";
import { ToggleButton } from "./ToggleButton";
import Account from "./Account";
import ConnectWallet from "./ConnectWallet";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle, onClose } = useDisclosure();

  const router = useRouter();
  const { active, error } = useWeb3React();

  const handleClick = () => {
    console.log("clicking");
  };

  // const currentRoute

  return (
    <Box
      as="nav"
      bg="bg-surface"
      boxShadow={useColorModeValue("sm", "sm-dark")}
    >
      <Container py={{ base: "3", lg: "4" }}>
        <Flex justify="space-between">
          <HStack spacing="4">
            <Logo />
            {isDesktop && (
              <ButtonGroup variant="ghost" spacing="1">
                <Button>Home</Button>
                <Button aria-current="page">Dashboard</Button>
                <Button>Tasks</Button>
                <Button>Bookmarks</Button>
                <Button>Users</Button>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              {/* <ButtonGroup variant="ghost" spacing="1"> */}
              <Link href="/projects/new">
                <Button variant="primary" size="sm" onClick={handleClick}>
                  Add Project
                </Button>
              </Link>
              {/* <IconButton
                  icon={<FiSearch fontSize="1.25rem" />}
                  aria-label="Search"
                />
                <IconButton
                  icon={<FiSettings fontSize="1.25rem" />}
                  aria-label="Settings"
                />
                <IconButton
                  icon={<FiHelpCircle fontSize="1.25rem" />}
                  aria-label="Help Center"
                /> */}
              {/* </ButtonGroup> */}
              <Button size="sm" variant="primary">
                New Project
              </Button>
              {active ? <Account /> : <ConnectWallet />}
              {/* <Avatar
                boxSize="10"
                name="Christoph Winston"
                src="https://tinyurl.com/yhkm2ek8"
              /> */}
            </HStack>
          ) : (
            <>
              {/* <ToggleButton
                isOpen={isOpen}
                aria-label="Open Menu"
                onClick={onToggle}
              /> */}
              {active ? <Account /> : <ConnectWallet />}
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                isFullHeight
                preserveScrollBarGap
                // Only disabled for showcase
                trapFocus={false}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <Sidebar />
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
