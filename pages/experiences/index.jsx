import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Timeline from "../../Components/Timeline";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node",
  "SCSS",
  "Next JS",
  "React",
  "Git",
  "DSA",
  "Storybook",
];

const Skills = () => {
  return (
    <>
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        w={"full"}
        gap="4"
        bg={useColorModeValue("white", "gray.900")}
        flexWrap={"wrap"}
        boxShadow={"2xl"}
      >
        <Timeline />
      </Flex>
    </>
  );
};

export default Skills;
