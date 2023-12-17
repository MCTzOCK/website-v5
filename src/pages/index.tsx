/**
 * src/pages/index.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 16.12.2023
 *
 */

import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa6";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Box w={"100%"} minH={"100vh"} h={"fit-content"} bg={"black"}>
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
          <Image
            src={"/assets/images/ben/2.jpeg"}
            alt={"Ben Siebert"}
            width={[200, 64]}
            rounded={"lg"}
            shadow={"xl"}
          />
          <Heading
            fontSize={["5xl", "7xl"]}
            fontWeight={1000}
            textAlign={"center"}
          >
            Ben Siebert
          </Heading>
          <Text
            fontSize={"xl"}
            maxW={["100%", "90%", "90%", "90%", "30%"]}
            mt={6}
          >
            Hey, I'm Ben Siebert, a 16 year old software engineer and student
            from Germany. I love to code and I'm always looking for new projects
            to work on. Most of my time I spend working on my projects für
            competitions, like Jugend forscht, or STARTUPTEENS. Most of projects
            are open source and can be found on my GitHub profile. If you are
            interested in my work or my person, feel free to look around this
            website. If you want to work with me, feel free to contact me!
          </Text>
          <ButtonGroup>
            <Button
              size={"lg"}
              leftIcon={<FaEnvelope />}
              as={Link}
              href={"/contact"}
            >
              Contact
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
}
