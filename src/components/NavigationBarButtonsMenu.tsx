/**
 * src/components/NavigationBarButtonsMenu.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 16.12.2023
 *
 */

import * as React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { FaBox, FaHome, FaProjectDiagram, FaRProject, FaUser } from "react-icons/fa";
import Link from "next/link";
import {
  FaDiagramProject,
  FaEnvelope,
  FaFileLines,
  FaPerson,
} from "react-icons/fa6";

export default function NavigationBarButtonsMenu(props: {
  onClose: () => void;
}) {
  return (
    <>
      <Flex
        w={"100%"}
        h={"fit-content"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Button
          variant={"ghost"}
          leftIcon={<FaHome />}
          as={Link}
          href={"/"}
          onClick={props.onClose}
          w={["100%", "100%", "100%", "auto"]}
          size={"lg"}
          justifyContent={"start"}
        >
          Home
        </Button>
        <Button
          variant={"ghost"}
          leftIcon={<FaPerson />}
          as={Link}
          href={"/about"}
          onClick={props.onClose}
          w={["100%", "100%", "100%", "auto"]}
          size={"lg"}
          justifyContent={"start"}
        >
          About me
        </Button>
        <Button
          variant={"ghost"}
          leftIcon={<FaBox />}
          as={Link}
          href={"/projects"}
          onClick={props.onClose}
          w={["100%", "100%", "100%", "auto"]}
          size={"lg"}
          justifyContent={"start"}
        >
          My Projects
        </Button>
        <Button
          variant={"ghost"}
          leftIcon={<FaEnvelope />}
          as={Link}
          href={"/contact"}
          onClick={props.onClose}
          w={["100%", "100%", "100%", "auto"]}
          size={"lg"}
          justifyContent={"start"}
        >
          Contact
        </Button>
        <Button
          variant={"ghost"}
          leftIcon={<FaFileLines />}
          as={Link}
          href={"/blog"}
          onClick={props.onClose}
          w={["100%", "100%", "100%", "auto"]}
          size={"lg"}
          justifyContent={"start"}
        >
          Blog
        </Button>
        <Button
          variant={"ghost"}
          leftIcon={<FaUser />}
          as={Link}
          href={"/blog"}
          onClick={props.onClose}
          w={["100%", "100%", "100%", "auto"]}
          size={"lg"}
          justifyContent={"start"}
        >
          Account
        </Button>
      </Flex>
    </>
  );
}
