import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  HStack,
  Image
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const TbIcons = require("react-icons/tb");

export default function Nav({ color }) {
  
  const colors = {
  "blue": "#3182CE", 
  "cyan": "#00B5D8", 
  "gray": "#718096", 
  "green": "#38A169", 
  "orange": "#DD6B20", 
  "pink": "#D53F8C", 
  "purple": "#805AD5", 
  "red": "#E53E3E", 
  "teal": "#319795", 
  "yellow": "#D69E2E"};
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan48] = useMediaQuery("(min-width: 48em)");

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      padding="8px"
      margin="0 0 16px 0"
      boxShadow={"base"}
      zIndex="sticky"
      as="header"
      alignItems={"center"}
      justifyContent={"space-between"}
      w="100%"
    >
      <a href={"/"}>
        KC
      </a>
      <Flex alignItems={"center"}>
        <Stack direction={"row"} spacing={7}>
          {isLargerThan48 ? (
            <>
              <Link to="/">
                <Button variant="ghost">
                  About
                </Button>
              </Link>
              <Link to="/experience">
                <Button variant="ghost">
                  Experience
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="ghost">
                  Projects
                </Button>
              </Link>
              <Link to="/resume">
                <Button variant="ghost">
                  Resume
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost">
                  Contact
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button
                as={IconButton}
                icon={<HamburgerIcon />}
                onClick={onOpen}
              ></Button>
              <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerBody>
                  <Link to="/">
                    <Button variant="ghost">
                      About
                    </Button>
                  </Link>
                  <Link to="/experience">
                    <Button variant="ghost">
                      Experience
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button variant="ghost">
                      Projects
                    </Button>
                  </Link>
                  <Link to="/resume">
                    <Button variant="ghost">
                      Resume
                    </Button>
                  </Link>
                  <Link to="contact">
                    <Button variant="ghost">
                      Contact
                    </Button>
                  </Link>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          )}
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
