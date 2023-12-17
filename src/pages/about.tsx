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
import {
  Box,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <>
      <Box w={"100%"} minH={"100vh"} h={"fit-content"} bg={"black"} p={4}>
        <Flex
          w={"100%"}
          minH={"100vh"}
          h={"fit-content"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={4}
        >
          <Box
            bg={"gray.900"}
            p={8}
            rounded={"xl"}
            shadow={"xl"}
            maxW={["100%", "90%", "40%"]}
            w={"100%"}
          >
            <Heading fontSize={"4xl"} fontWeight={1000}>
              Hey, I am Ben Siebert
            </Heading>
            <Tabs colorScheme={"brand"} size={"md"} isFitted mt={2} p={0}>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Projects</Tab>
                <Tab>Prizes</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0}>
                  <Flex mt={8} gap={4} direction={["column", "row"]}>
                    <Image src={"/assets/images/ben/3.jpeg"} rounded={"xl"} />
                    <Text fontSize={"xl"}>
                      I am Ben Siebert, a 16 year old software engineer and
                      student from Germany. I love to code and I'm always
                      looking for new projects to work on. Most of my time I
                      spend working on my projects für competitions, like Jugend
                      forscht, or STARTUPTEENS. Most of projects are open source
                      and can be found on my GitHub profile. I started
                      programming at the age of only 8 years with the visual
                      programming language Scratch. After a few years I started
                      to learn Java and created my first desktop applications. A
                      few years forward I learned how to develop fullstack web
                      applications and this is what I do today.
                    </Text>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Timeline
                    milestones={[
                      {
                        id: 1,
                        date: "2019-2020",
                        description:
                          'For the first time I participated at the youth competition "Jugend forscht" and won the 3rd prize at the regional competition',
                        title: "Decryptor",
                        image:
                          "https://download.ben-siebert.com/projects/decryptor/logo.jpg",
                        link: {
                          text: "View project",
                          url: "/project/decryptor",
                        },
                      },
                      {
                        id: 2,
                        date: "2020-2021",
                        description:
                          "With a friend of mine I created the SenOS operating system which helps aged people to use a computer.",
                        title: "SenOS",
                        image:
                          "https://avatars.githubusercontent.com/u/69637254?s=200&v=4",
                        link: {
                          text: "View project",
                          url: "/project/senos",
                        },
                      },
                      {
                        id: 3,
                        date: "2021-2022",
                        description:
                          "With a friend of mine I created the InCode programming language which allows creating websites with natural language",
                        title: "InCode",
                        image:
                          "https://avatars.githubusercontent.com/u/83610050?s=200&v=4",
                        link: {
                          text: "View project",
                          url: "/project/incode",
                        },
                      },
                      {
                        id: 4,
                        date: "2022-Present",
                        description:
                          "CodeUp is a platform for learning programming. It includes a full features online IDE and much more.",
                        title: "CodeUp",
                        image: "https://codeup.space/codeup.png",
                        link: {
                          text: "View project",
                          url: "/project/codeup",
                        },
                      },
                      {
                        id: 5,
                        date: "2023-Present",
                        description:
                          "SaveWorld is an app which helps people to get a more sustainable lifestyle.",
                        title: "SaveWorld",
                        image:
                          "https://content.saveworld.one/assets/7de3ae7c-0d86-416a-a761-93403ae870ca",
                        link: {
                          text: "View project",
                          url: "/project/saveworld",
                        },
                      },
                    ]}
                    title={""}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
