import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Projects from "../../Components/Projects";

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

const Skills = ({ projects }) => {
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
        <Projects data={projects} />
      </Flex>
    </>
  );
};
export async function getServerSideProps() {
  let res1 = await fetch(`http://localhost:8080/projects`);
  let data1 = await res1.json();
  return {
    props: {
      projects: data1,
    },
  };
}
export default Skills;
