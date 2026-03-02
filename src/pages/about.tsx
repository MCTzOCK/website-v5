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
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
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
import {
  FaBirthdayCake,
  FaDocker,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import {
  FaBook,
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
                      text: "18 years old",
                    },
                    {
                      color: "orange.500",
                      icon: <FaLocationPin />,
                      text: "Hattingen",
                    },
                    {
                      color: "red.500",
                      icon: <FaCode />,
                      text: "10+ years of coding",
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
                    color: "#FFFFFF",
                    level: 100,
                  },
                  {
                    name: "Next.js",
                    icon: <TbBrandNextjs />,
                    color: "#FFFFFF",
                    level: 100,
                  },
                  {
                    name: "Socket.IO",
                    icon: <TbBrandSocketIo />,
                    color: "#FFFFFF",
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
                    color: "#FFFFFF",
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
                    color: "#FFFFFF",
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
                    color: "#FFFFFF",
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
            <Heading
              size={"lg"}
              fontFamily={"monospace"}
              id={"projects-awards"}
              mt={8}
            >
              Projects & Awards
            </Heading>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={4}
              mt={8}
            >
              {(
                [
                  {
                    name: "Decryptor",
                    color: "green.500",
                    logo: "https://download.ben-siebert.com/projects/decryptor/logo.jpg",
                    description:
                      "The Decryptor is a tool to encrypt and decrypt any text with multiple algorithms.",
                    source: "https://github.com/MCTzOCK/Decryptor",
                    paper:
                      "https://download.ben-siebert.com/projects/decryptor/Decryptor_essay_2020.pdf",
                    awards: [
                      {
                        name: "3rd regional prize",
                        date: "2020",
                        issuer: "Jugend forscht e.V.",
                      },
                    ],
                  },
                  {
                    name: "SenOS",
                    color: "orange.500",
                    logo: "https://avatars.githubusercontent.com/u/69637254?s=200&v=4",
                    description:
                      "SenOS is an operating system that helps elderly people to use a computer.",
                    source: "https://github.com/MCTzOCK/SenOS",
                    paper:
                      "https://download.ben-siebert.com/projects/senos/SenOS_essay_2021.pdf",
                    awards: [
                      {
                        name: "1st regional prize",
                        date: "2021",
                        issuer: "Jugend forscht e.V.",
                      },
                    ],
                  },
                  {
                    name: "InCode",
                    color: "white",
                    logo: "https://avatars.githubusercontent.com/u/83610050?s=200&v=4",
                    description:
                      "InCode is a full-featured simple programming language that allows creating websites with natural language.",
                    source: "https://github.com/InCodeDevs/InCode",
                    view: "https://incode.ben-siebert.com",
                    paper:
                      "https://download.ben-siebert.com/projects/incode/InCode_essay_2022.pdf",
                    awards: [
                      {
                        name: "1st regional prize",
                        date: "2022",
                        issuer: "Jugend forscht e.V.",
                      },
                      {
                        name: "1st landwide prize",
                        date: "2022",
                        issuer: "Jugend forscht e.V.",
                      },
                      {
                        name: "Special prize for the most creatively valuable work",
                        date: "2022",
                        issuer:
                          "Ministerium für Schule und Bildung des Landes Nordrhein-Westfalen",
                      },
                    ],
                  },
                  {
                    name: "CodeUp",
                    color: "#f7de1f",
                    logo: "https://codeup.space/codeup.png",
                    description:
                      "CodeUp is an all-in-one platform for learning programming. It includes a full featured online IDE and much more.",
                    view: "https://codeup.space",
                    paper:
                      "https://download.ben-siebert.com/projects/codeup/CodeUp_essay_2023.pdf",
                    awards: [
                      {
                        name: "1st regional prize",
                        date: "2023",
                        issuer: "Jugend forscht e.V.",
                      },
                      {
                        name: "Special prize",
                        date: "2023",
                        issuer: "Hengst Filtration SE",
                      },
                      {
                        name: "1st landwide prize",
                        date: "2023",
                        issuer: "Jugend forscht e.V.",
                      },
                      {
                        name: "JugendUnternimmt Summerschool",
                        date: "2023",
                        issuer: "Jugend forscht e.V.",
                      },
                      {
                        name: "2nd nationwide place",
                        date: "2023",
                        issuer: "STARTUP TEENS Netzwerk e.V.",
                      },
                    ],
                  },
                  {
                    name: "SaveWorld",
                    color: "#22dd6c",
                    logo: "https://www.saveworld.one/logo.png",
                    description:
                      "SaveWorld aims to help people to get a more sustainable lifestyle.",
                    view: "https://saveworld.one",
                    awards: [
                      {
                        name: "Interdisziplinärer Regionalsieger Jugend forscht Dortmund",
                        date: "2024",
                        issuer: "Jugend forscht e.V.",
                      },
                      {
                        name: "Sonderpreis Umwelt",
                        date: "2024",
                        issuer:
                          "Ministerium für Umwelt, Naturschutz und Verkehr des Landes Nordrhein-Westfalen",
                      },
                      {
                        name: "2nd place Sonderpreis Umwelt",
                        date: "2024",
                        issuer: "Jugend forscht e.V.",
                      },
                      {
                        name: "Sonderpreis BUW I",
                        date: "2024",
                        issuer: "BundesUmweltWettbewerb",
                      },
                    ],
                  },
                ] as {
                  name: string;
                  logo: string;
                  color: string;
                  description: string;
                  source?: string;
                  paper?: string;
                  view?: string;
                  awards: {
                    name: string;
                    date: string;
                    issuer: string;
                  }[];
                }[]
              ).map((project) => (
                <>
                  <Box bg={"gray.900"} rounded={"md"} p={2}>
                    <Flex
                      fontSize={"5xl"}
                      color={project.color}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Heading size={"lg"} color={project.color}>
                        {project.name}
                      </Heading>
                      <Image
                        src={project.logo}
                        w={12}
                        h={12}
                        rounded={"full"}
                      />
                    </Flex>
                    <Text>{project.description}</Text>
                    <HStack gap={4} mt={2}>
                      {project.source && (
                        <IconButton
                          aria-label={"GitHub"}
                          as={"a"}
                          href={project.source}
                          color={project.color}
                          icon={<FaGithub />}
                          variant={"ghost"}
                          size={"lg"}
                        />
                      )}
                      {project.paper && (
                        <IconButton
                          aria-label={"Paper"}
                          as={"a"}
                          href={project.paper}
                          color={project.color}
                          icon={<FaBook />}
                          variant={"ghost"}
                          size={"lg"}
                        />
                      )}
                      {project.view && (
                        <IconButton
                          aria-label={"View"}
                          as={"a"}
                          href={project.view}
                          color={project.color}
                          icon={<FaExternalLinkAlt />}
                          variant={"ghost"}
                          size={"lg"}
                        />
                      )}
                    </HStack>
                    <Heading
                      size={"sm"}
                      mt={2}
                      color={project.color}
                      display={project.awards.length > 0 ? "block" : "none"}
                    >
                      Awards
                    </Heading>
                    {project.awards.map((award) => (
                      <Box bg={"gray.800"} p={2} rounded={"md"} mt={2}>
                        <Text fontFamily={"monospace"} fontSize={"md"}>
                          {award.date}
                        </Text>
                        <Text fontSize={"lg"} color={project.color}>
                          {award.name}
                        </Text>
                        <Text>
                          by <b>{award.issuer}</b>
                        </Text>
                      </Box>
                    ))}
                  </Box>
                </>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
