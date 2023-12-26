/**
 * src/components/Footer.tsx
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
  Divider,
  Heading,
  HStack,
  IconButton,
  Link,
  LinkProps,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <Box w={"100%"} backgroundColor={"black"}>
      <Divider />
      <Box p={{ base: 5, md: 8 }} maxW="7xl" marginInline="auto">
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          gap={24}
        >
          <Box maxW="300px">
            <Heading fontSize={"4xl"} fontWeight={1000}>
              Ben Siebert
            </Heading>
            <Text mt={2} color="white" fontSize="lg">
              Made with ❤️ and ☕
            </Text>
          </Box>
          <HStack
            spacing={8}
            display={"flex"}
            justifyContent={{ sm: "space-between", md: "normal" }}
            direction={{ base: "column", md: "row" }}
          >
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
                About
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="white">
                <CustomLink href={"/about"}>About me</CustomLink>
                <CustomLink href={"/contact"}>Contact</CustomLink>
                <CustomLink href={"/blog"}>Blog</CustomLink>
                <CustomLink href={"/projects"}>Projects</CustomLink>
              </VStack>
            </VStack>
          </HStack>
        </Stack>
        <Divider my={4} />
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={3}
          justifyContent="space-between"
        >
          <Text fontSize="md">
            Copyright &copy;&nbsp;{new Date().getFullYear()}&nbsp;
            <Link
              href="https://ben-siebert.com"
              _hover={{ textDecoration: "underline" }}
              isExternal
            >
              Ben Siebert
            </Link>
          </Text>
          <Stack spacing={2} direction={{ base: "column", md: "row" }}>
            <IconButton
              aria-label={"GitHub"}
              as={Link}
              target={"_blank"}
              href={"https://github.com/MCTzOCK"}
              icon={<FaGithub />}
            />
            <IconButton
              aria-label={"Instagram"}
              as={Link}
              target={"_blank"}
              href={"https://instagram.com/ben.sbrt"}
              icon={<FaInstagram />}
            />
            <IconButton
              aria-label={"LinkedIn"}
              as={Link}
              target={"_blank"}
              href={"https://www.linkedin.com/in/ben-siebert-111595278/"}
              icon={<FaLinkedinIn />}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      href="#"
      fontSize="lg"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
