import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("facebook.300", "facebook.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex gap="8" color="white">
          <Link href="/">
            <Heading size="20">Shiv Shankar</Heading>
          </Link>
          <Link href="/projects">
            <Heading size="20">Projects</Heading>
          </Link>
          <Link href="/experiences">
            <Heading size="20">Experiences</Heading>
          </Link>
        </Flex>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu style={{ margin: "0" }}>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.githubusercontent.com/u/65837544?v=4"}
                />
              </MenuButton>
              <MenuList style={{ margin: "0" }} alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.githubusercontent.com/u/65837544?v=4"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Shiv Shankar</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Projects</MenuItem>
                <MenuItem>Experiences</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
