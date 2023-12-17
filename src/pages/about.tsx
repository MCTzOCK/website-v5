/**
 * src/pages/about.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 17.12.2023
 *
 */

import * as React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <>
      <Box w={"100%"} minH={"100vh"} h={"fit-content"} bg={"black"} p={4}>
        <Flex
          w={"100%"}
          minH={"100vh"}
          h={"fit-content"}
          p={8}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={["initial", "center"]}
          gap={4}
        >
          <Heading fontSize={"5xl"} fontWeight={1000}>
            I am
          </Heading>
          <Heading fontSize={"4xl"} fontWeight={1000} color={"brand.300"}>
            <TypeAnimation
              sequence={[
                "a Fullstack developer",
                "a Student",
                "a Software Engineer",
                "an Entrepreneur",
              ]}
              wrapper={"span"}
              // @ts-ignore
              speed={250}
              repeat={Infinity}
            />
          </Heading>
        </Flex>
      </Box>
    </>
  );
}
