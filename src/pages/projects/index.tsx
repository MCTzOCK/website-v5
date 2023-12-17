/**
 * src/pages/projects/index.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 17.12.2023
 *
 */

import * as React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { projects } from "@/projects";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Box w={"100%"} minH={"100vh"} h={"fit-content"} bg={"black"}>
        <Flex
          w={"100%"}
          minH={"100vh"}
          h={"fit-content"}
          justifyContent={"center"}
          p={4}
        >
          <Box
            maxW={["100%", "90%", "90%", "90%", "60%"]}
            bg={"gray.900"}
            w={"100%"}
            p={4}
            rounded={"lg"}
            shadow={"xl"}
          >
            <Heading fontWeight={1000} size={"2xl"} textAlign={"center"}>
              Projects
            </Heading>
            <Text fontSize={"xl"} p={8}>
              On my website are only my most important projects listed. If you
              are interested in more projects, you can find them on my GitHub
              profile.
            </Text>
            <ButtonGroup w={"100%"} justifyContent={"center"}>
              <Button
                leftIcon={<FaGithub />}
                size={"lg"}
                as={Link}
                href={"https://github.com/MCTzOCK"}
              >
                GitHub
              </Button>
            </ButtonGroup>
            <VStack mt={6} gap={4}>
              {projects.map((p) => {
                return (
                  <>
                    <Divider />
                    <Flex
                      w={"100%"}
                      direction={[
                        "column",
                        "column",
                        "column",
                        "column",
                        "row",
                      ]}
                      gap={10}
                    >
                      <Image
                        src={p.image}
                        w={"100%"}
                        maxW={"300px"}
                        h={"100%"}
                        rounded={"lg"}
                        flex={"100%"}
                        aspectRatio={"1/1"}
                      />
                      <VStack w={"100%"} flex={"10%"}>
                        <Heading
                          fontWeight={1000}
                          textAlign={"left"}
                          w={"100%"}
                          id={p.identifier}
                        >
                          {p.name}
                        </Heading>
                        <Text fontSize={"xl"}>{p.caption}</Text>
                        <br />
                        <Heading
                          size={"lg"}
                          textAlign={"left"}
                          w={"100%"}
                          display={p.awards.length > 0 ? "block" : "none"}
                        >
                          Awards
                        </Heading>
                        <UnorderedList w={"100%"}>
                          {p.awards.map((a) => {
                            return (
                              <ListItem>
                                <Text fontSize={"xl"}>
                                  {a.title} by {a.issuedBy}
                                </Text>
                              </ListItem>
                            );
                          })}
                        </UnorderedList>
                        <br />
                        <Flex
                          w={"100%"}
                          gap={5}
                          justifyContent={"center"}
                          flexDirection={["column", "column", "column", "row"]}
                        >
                          {p.links.map((l) => {
                            return (
                              <Button
                                leftIcon={l.icon}
                                size={"lg"}
                                as={"a"}
                                href={l.url}
                                target={"_blank"}
                                w={"100%"}
                              >
                                {l.text}
                              </Button>
                            );
                          })}
                        </Flex>
                      </VStack>
                    </Flex>
                    <Divider />
                  </>
                );
              })}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
