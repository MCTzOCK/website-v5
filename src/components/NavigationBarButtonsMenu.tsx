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
import { FaBox, FaHome, FaProjectDiagram, FaRProject } from "react-icons/fa";
import Link from "next/link";
import { FaDiagramProject, FaPerson } from "react-icons/fa6";

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
        flexDirection={["column", "column", "row", "row"]}
      >
        <Button
          variant={"ghost"}
          leftIcon={<FaHome />}
          as={Link}
          href={"/"}
          onClick={props.onClose}
          w={["100%", "auto"]}
          size={"lg"}
        >
          Home
        </Button>
        <Button
          variant={"ghost"}
          leftIcon={<FaPerson />}
          as={Link}
          href={"/about"}
          onClick={props.onClose}
          w={["100%", "auto"]}
          size={"lg"}
        >
          About me
        </Button>
        <Button
          variant={"ghost"}
          leftIcon={<FaBox />}
          as={Link}
          href={"/projects"}
          onClick={props.onClose}
          w={["100%", "auto"]}
          size={"lg"}
        >
          My Projects
        </Button>
      </Flex>
    </>
  );
}
