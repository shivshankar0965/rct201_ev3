import React from "react";
import {
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const timeline = [
  {
    id: 1,
    position: "Student",
    organisation: "Masai School",
    place: "Bangaluru",
    start: "May 2022",
    end: "Present",
  },
  {
    id: 2,
    position: "Student",
    organisation: "LNJPIT",
    place: "Chapra",
    start: "Aug 2017",
    end: "Oct 2021",
  },
  {
    id: 3,
    position: "Service Desk Engineer",
    organisation: "HCL Tech. ltd",
    place: "Noida sector 62",
    start: "Jan 2022",
    end: "Apr 2022",
  },
];
const Timeline = () => {
  return (
    <>
      <VStack
        bg={useColorModeValue("white", "gray.900")}
        display="flex"
        alignItems={"left"}
        width="100%"
        boxShadow={"2xl"}
        p={6}
        borderWidth="1px"
        borderRadius="lg"
      >
        {timeline.map((tline) => (
          <HStack key={tline.id}>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              borderRadius="50%"
              boxSize="35px"
              color="white"
              background={tline.id === 1 ? "facebook.900" : "facebook.300"}
            >
              {tline.id}
            </Box>
            <VStack ml="50px" display="flex" alignItems="left">
              <Heading size="sm">
                {tline.position} at {tline.organisation}
              </Heading>
              <Text>
                {tline.start} - {tline.end}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default Timeline;
