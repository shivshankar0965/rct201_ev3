import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
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
        {skills.map((skill, idx) => {
          return (
            <Text
              p={2}
              borderRadius={"lg"}
              bg={"facebook.300"}
              key={idx}
            >{`${skill}`}</Text>
          );
        })}
      </Flex>
    </>
  );
};

export default Skills;
