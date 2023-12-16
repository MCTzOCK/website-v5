/**
 * src/pages/contact.tsx
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
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FaDiscord, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
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
            Contact
          </Heading>
          <Text fontSize={"2xl"} maxW={["100%", "30%"]}>
            I am always happy to hear from you.
            <br />
            There are several ways to contact me:
            <List mt={4} spacing={4}>
              <ListItem>
                <ListIcon as={FaEnvelope} color="brand.500" />
                E-Mail:{" "}
                <Link href={"mailto:hello@ben-siebert.de"} color={"brand.500"}>
                  hello@ben-siebert.de
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={FaLinkedin} color="brand.500" />
                LinkedIn:{" "}
                <Link
                  href={"https://www.linkedin.com/in/ben-siebert-111595278/"}
                  color={"brand.500"}
                >
                  Ben Siebert
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={FaDiscord} color="brand.500" />
                Discord: @ben.sbrt
              </ListItem>
              <ListItem>
                <ListIcon as={FaInstagram} color="brand.500" />
                Instagram:{" "}
                <Link
                  href={"https://instagram.com/ben.sbrt"}
                  color={"brand.500"}
                >
                  ben.sbrt
                </Link>
              </ListItem>
            </List>
          </Text>
        </Flex>
      </Box>
    </>
  );
}
