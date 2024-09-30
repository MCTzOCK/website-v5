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
  Grid,
  Heading,
  HStack,
  Image,
  Progress,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Timeline from "@/components/Timeline";
import Head from "next/head";
import { FaBirthdayCake, FaDocker } from "react-icons/fa";
import {
  FaCode,
  FaCss3,
  FaFlag,
  FaGraduationCap,
  FaHtml5,
  FaLocationPin,
  FaNodeJs,
} from "react-icons/fa6";
import {
  DiIonic,
  DiJava,
  DiMongodb,
  DiMysql,
  DiNginx,
  DiReact,
  DiSass,
  DiSwift,
} from "react-icons/di";
import {
  SiChakraui,
  SiElectron,
  SiExpress,
  SiFastify,
  SiGnubash,
  SiJavascript,
  SiLatex,
  SiPhp,
  SiTypescript,
} from "react-icons/si";
import {
  TbAssembly,
  TbBrandCpp,
  TbBrandCSharp,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandSocketIo,
} from "react-icons/tb";
import {
  BiLogoGit,
  BiLogoGoLang,
  BiLogoPython,
  BiLogoUnity,
} from "react-icons/bi";

export default function About() {
  return (
    <>
      <Head>
        <title>About Ben Siebert - Software Engineer & Student</title>
      </Head>
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
            bg={"blackAlpha.800"}
            p={8}
            rounded={"xl"}
            shadow={"xl"}
            maxW={["100%", "90%", "90%", "90%", "60%"]}
            w={"100%"}
          >
            <Flex justifyContent={"space-between"} mb={8}>
              <Heading fontSize={"4xl"} fontWeight={1000}>
                Hey, I am Ben Siebert
              </Heading>
              <Image
                src={"/assets/images/ben/3.jpeg"}
                rounded={"xl"}
                maxW={"100px"}
                h={"100%"}
                aspectRatio={"1/1"}
              />
            </Flex>
            <Flex gap={4} alignItems={"flex-start"} direction={"column"}>
              <Heading size={"lg"} fontFamily={"monospace"} id={"profile"}>
                Profile
              </Heading>
              <Grid
                templateColumns={[
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(6, 1fr)",
                ]}
                w={"100%"}
                gap={4}
              >
                {(
                  [
                    {
                      color: "green.500",
                      icon: <FaBirthdayCake />,
                      text: "17 years old",
                    },
                    {
                      color: "orange.500",
                      icon: <FaLocationPin />,
                      text: "Hattingen",
                    },
                    {
                      color: "red.500",
                      icon: <FaCode />,
                      text: "9 years of coding",
                    },
                    {
                      color: "blue.500",
                      icon: <FaCode />,
                      text: "Fullstack developer",
                    },
                    {
                      color: "purple.500",
                      icon: <FaGraduationCap />,
                      text: "Student",
                    },
                    {
                      color: "yellow.500",
                      icon: <FaFlag />,
                      text: "German",
                    },
                    {
                      color: "teal.500",
                      icon: <FaFlag />,
                      text: "English",
                    },
                    {
                      color: "red.500",
                      icon: <FaFlag />,
                      text: "Spanish",
                    },
                  ] as {
                    color: string;
                    icon: any;
                    text: string;
                  }[]
                ).map((a) => (
                  <HStack
                    p={2}
                    rounded={"md"}
                    bg={a.color}
                    color={"white"}
                    fontSize={"sm"}
                    textTransform={"none"}
                    w={"fit-content"}
                  >
                    {a.icon}
                    <Text>{a.text}</Text>
                  </HStack>
                ))}
              </Grid>
            </Flex>
            <Heading size={"lg"} fontFamily={"monospace"} id={"skills"} mt={8}>
              Skills
            </Heading>
            <Heading size={"md"} fontFamily={"monospace"} id={"skills-os"}>
              Operating Systems
            </Heading>
            In the past I've worked with <b>Windows</b>, <b>MacOS</b> and{" "}
            <b>Linux</b>. Personally, I prefer Windows for general purpose
            development, MacOS for mobile development and development on the go
            and Linux for hosting and server applications. I am familiar with
            all three operating systems and can work with them without any
            problems.
            <Heading
              size={"md"}
              fontFamily={"monospace"}
              id={"skills-languages"}
              mt={8}
            >
              Programming Languages & Technologies
            </Heading>
            Since I consider myself a fullstack developer, I have experience
            with many different programming languages and technologies.
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={4}
              mt={4}
            >
              {(
                [
                  {
                    name: "Java",
                    icon: <DiJava />,
                    color: "red",
                    level: 100,
                  },
                  {
                    name: "JavaScript",
                    icon: <SiJavascript />,
                    color: "yellow",
                    level: 100,
                  },
                  {
                    name: "TypeScript",
                    icon: <SiTypescript />,
                    color: "#2888da",
                    level: 100,
                  },
                  {
                    name: "HTML",
                    icon: <FaHtml5 />,
                    color: "#e34c26",
                    level: 100,
                  },
                  {
                    name: "CSS",
                    icon: <FaCss3 />,
                    color: "#264de4",
                    level: 80,
                  },
                  {
                    name: "React",
                    icon: <DiReact />,
                    color: "#61dafb",
                    level: 100,
                  },
                  {
                    name: "Chakra-UI",
                    icon: <SiChakraui />,
                    color: "#319795",
                    level: 90,
                  },
                  {
                    name: "libGDX",
                    icon: <DiJava />,
                    color: "red",
                    level: 40,
                  },
                  {
                    name: "C#",
                    icon: <TbBrandCSharp />,
                    color: "blue",
                    level: 45,
                  },
                  {
                    name: "Go",
                    icon: <BiLogoGoLang />,
                    color: "#00ADD8",
                    level: 20,
                  },
                  {
                    name: "Python",
                    icon: <BiLogoPython />,
                    color: "#3776AB",
                    level: 20,
                  },
                  {
                    name: "express.js",
                    icon: <SiExpress />,
                    color: "#000000",
                    level: 100,
                  },
                  {
                    name: "Next.js",
                    icon: <TbBrandNextjs />,
                    color: "#000000",
                    level: 100,
                  },
                  {
                    name: "Socket.IO",
                    icon: <TbBrandSocketIo />,
                    color: "#000000",
                    level: 80,
                  },
                  {
                    name: "Node.js",
                    icon: <FaNodeJs />,
                    color: "#68A063",
                    level: 90,
                  },
                  {
                    name: "Fastify",
                    icon: <SiFastify />,
                    color: "#000000",
                    level: 75,
                  },
                  {
                    name: "Swift",
                    icon: <DiSwift />,
                    color: "#FA7343",
                    level: 80,
                  },
                  {
                    name: "Ionic",
                    icon: <DiIonic />,
                    color: "#3880FF",
                    level: 100,
                  },
                  {
                    name: "React-Native",
                    icon: <TbBrandReactNative />,
                    color: "#61dafb",
                    level: 90,
                  },
                  {
                    name: "MySQL",
                    icon: <DiMysql />,
                    color: "#4479A1",
                    level: 90,
                  },
                  {
                    name: "MongoDB",
                    icon: <DiMongodb />,
                    color: "#47A248",
                    level: 100,
                  },
                  {
                    name: "Docker",
                    icon: <FaDocker />,
                    color: "#2496ED",
                    level: 90,
                  },
                  {
                    name: "LaTeX",
                    icon: <SiLatex />,
                    color: "#008080",
                    level: 90,
                  },
                  {
                    name: "Bash",
                    icon: <SiGnubash />,
                    color: "#FFFFFF",
                    level: 80,
                  },
                  {
                    name: "Unity",
                    icon: <BiLogoUnity />,
                    color: "#000000",
                    level: 75,
                  },
                  {
                    name: "Git",
                    icon: <BiLogoGit />,
                    color: "#F05032",
                    level: 90,
                  },
                  {
                    name: "Sass",
                    icon: <DiSass />,
                    color: "#CC6699",
                    level: 90,
                  },
                  {
                    name: "x86 Assembly",
                    icon: <TbAssembly />,
                    color: "#000000",
                    level: 20,
                  },
                  {
                    name: "Electron",
                    icon: <SiElectron />,
                    color: "#47848F",
                    level: 95,
                  },
                  {
                    name: "C++",
                    icon: <TbBrandCpp />,
                    color: "#00599C",
                    level: 40,
                  },
                  {
                    name: "NGINX",
                    icon: <DiNginx />,
                    color: "#269539",
                    level: 95,
                  },
                  {
                    name: "PHP",
                    icon: <SiPhp />,
                    color: "#777BB4",
                    level: 75,
                  },
                ] as {
                  name: string;
                  icon: any;
                  level: number;
                  color: string;
                }[]
              )
                .sort((a, b) => b.level - a.level)
                .map((a) => (
                  <>
                    <Box rounded={"md"} p={2} shadow={"lg"} bg={"gray.900"}>
                      <Flex
                        fontSize={"5xl"}
                        color={a.color}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Heading size={"md"} color={a.color}>
                          {a.name}
                        </Heading>
                        {a.icon}
                      </Flex>
                      <Progress
                        value={a.level}
                        size={"sm"}
                        variant={"brand"}
                        mt={2}
                        rounded={"xl"}
                      />
                    </Box>
                  </>
                ))}
            </Grid>
            <Tabs colorScheme={"brand"} size={"md"} isFitted mt={2} p={0}>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Projects</Tab>
                <Tab>Awards</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0}>
                  <Flex mt={8} gap={4} direction={["column", "row"]}>
                    <Image
                      src={"/assets/images/ben/3.jpeg"}
                      rounded={"xl"}
                      maxW={"300px"}
                      h={"100%"}
                      aspectRatio={"1/1"}
                    />
                    <Text fontSize={"xl"}>
                      I am Ben Siebert, a 16 year old software engineer and
                      student from Germany. I love to code and I'm always
                      looking for new projects to work on. Most of my time I
                      spend working on my projects für competitions, like Jugend
                      forscht, or STARTUPTEENS. Most of my projects are open
                      source and can be found on my GitHub profile. I started
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
                          url: "/projects#decryptor",
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
                          url: "/projects#senos",
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
                          url: "/projects#incode",
                        },
                      },
                      {
                        id: 4,
                        date: "2022-Present",
                        description:
                          "CodeUp is a platform for learning programming. It includes a full featured online IDE and much more.",
                        title: "CodeUp",
                        image: "https://codeup.space/codeup.png",
                        link: {
                          text: "View project",
                          url: "/projects#codeup",
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
                          url: "/projects#saveworld",
                        },
                      },
                    ]}
                    title={""}
                  />
                </TabPanel>
                <TabPanel>
                  <Timeline
                    milestones={[
                      {
                        id: 11,
                        date: "2023 - CodeUp",
                        title: "STARTUPTEENS",
                        description: "2nd prize at the national competition",
                      },
                      {
                        id: 10,
                        date: "2023 - CodeUp",
                        title: "Jugend forscht",
                        description:
                          "Participation at the nationwide competition",
                        image: "/assets/images/ben/8.jpg",
                      },
                      {
                        id: 9,
                        date: "2023 - CodeUp",
                        title: "Jugend forscht",
                        description:
                          "Special prize: participation at the Summer Academy JugendUnternimmt",
                      },
                      {
                        id: 8,
                        date: "2023 - CodeUp",
                        title: "Jugend forscht",
                        description: "1st prize at the landwide competition",
                        image: "/assets/images/ben/7.jpg",
                      },
                      {
                        id: 7,
                        date: "2023 - CodeUp",
                        title: "Jugend forscht",
                        description: "Special prize by Hengst Filtration SE",
                        image: "/assets/images/ben/6.jpg",
                      },
                      {
                        id: 6,
                        date: "2023 - CodeUp",
                        title: "Jugend forscht",
                        description: "1st prize at the regional competition",
                      },
                      {
                        id: 5,
                        date: "2022 - InCode",
                        title: "Jugend forscht",
                        description:
                          "Special prize for the most creatively valuable work",
                      },
                      {
                        id: 4,
                        date: "2022 - InCode",
                        title: "Jugend forscht",
                        description: "1st prize at the landwide competition",
                      },
                      {
                        id: 3,
                        date: "2022 - InCode",
                        title: "Jugend forscht",
                        description: "1st prize at the regional competition",
                      },
                      {
                        id: 2,
                        date: "2021 - SenOS",
                        title: "Jugend forscht",
                        description: "1st prize at the regional competition",
                      },
                      {
                        id: 1,
                        date: "2020 - Decryptor",
                        title: "Jugend forscht",
                        description: "3rd prize at the regional competition",
                        image:
                          "https://download.ben-siebert.com/ben/JuFo2020-1.jpg",
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
