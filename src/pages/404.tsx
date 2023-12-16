/**
 * src/pages/404.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 17.12.2023
 *
 */

import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa6";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
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
          <Heading
            fontSize={["5xl", "7xl"]}
            fontWeight={1000}
            textAlign={"center"}
          >
            404
          </Heading>
          <Text fontSize={"xl"} maxW={["100%", "30%"]}>
            This page could unfortunately not be found.
          </Text>
          <ButtonGroup>
            <Button size={"lg"} leftIcon={<FaHome />} as={Link} href={"/"}>
              Home
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
}
