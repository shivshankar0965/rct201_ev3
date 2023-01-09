import React from "react";
import { useRouter } from "next/router";
import {
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineFolderOpen, AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const Project = ({ data }) => {
  const router = useRouter();
  const onClickHandler = (url) => {
    router.push(url);
  };
  return (
    <>
      <Box
        onClick={() => onClickHandler(data.clone_url)}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        p="4"
        display="flex"
        w={""}
        borderWidth="1px"
        borderRadius="lg"
      >
        <VStack display="flex" align="left">
          <Flex gap="4">
            <AiOutlineFolderOpen size="24" />
            <Heading size="md">{data.name}</Heading>
          </Flex>
          <Heading size="sm">
            {data.description ? data.description : "Project Description"}
          </Heading>
          <Flex gap="4">
            <HStack>
              <AiOutlineStar size="24" />
              <Box>{data.stargazers_count}</Box>
            </HStack>
            <HStack>
              <BiGitRepoForked size="24" />
              <Box>{data.fork}</Box>
            </HStack>
          </Flex>
        </VStack>
        <Flex justifyContent="flex-end" alignItems="end" gap="2">
          <BsDot size="24" />
          <Heading size="md">{data.language}</Heading>
        </Flex>
      </Box>
    </>
  );
};

export default Project;
