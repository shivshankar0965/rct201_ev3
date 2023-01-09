import React from "react";
import Project from "./Project";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
const Projects = ({ data }) => {
  return (
    <>
      <Heading mb="4">Projects</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {data?.items?.map((project) => {
          return (
            <GridItem key={project.id}>
              <Project data={project} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default Projects;
