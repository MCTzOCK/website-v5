/**
 * src/projects.ts
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 17.12.2023
 *
 */
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { FaApple, FaDownload, FaFileLines, FaGlobe } from "react-icons/fa6";

export const projects: {
  name: string;
  caption: string;
  identifier: string;
  links: {
    url: string;
    text: string;
    icon: React.ReactElement;
  }[];
  image: string;
  awards: {
    title: string;
    issuedBy: string;
  }[];
}[] = [
  {
    name: "Decryptor",
    identifier: "decryptor",
    caption:
      "The Decryptor is a tool to decrypt and encrypt plain text. It supports multiple symmetrical algorithms and some self-developed algorithms.",
    links: [
      {
        url: "https://github.com/coolescoden/Decryptor",
        icon: <FaGithub />,
        text: "Source",
      },
      {
        url: "https://download.ben-siebert.com/projects/decryptor/Decryptor_remastered_2023.zip",
        icon: <FaDownload />,
        text: "Download",
      },
      {
        url: "https://download.ben-siebert.com/projects/decryptor/Decryptor_essay_2020.pdf",
        icon: <FaFileLines />,
        text: "Essay",
      },
    ],
    image: "https://download.ben-siebert.com/projects/decryptor/logo.jpg",
    awards: [
      {
        title: "3rd Place (regional)",
        issuedBy: "Jugend forscht",
      },
    ],
  },
  {
    name: "SenOS",
    identifier: "senos",
    caption:
      "SenOS is an operating system that helps beginners and old people to use a computer. It does not require any knowledge about computers.",
    links: [
      {
        url: "https://github.com/coolescoden/SenOS",
        icon: <FaGithub />,
        text: "Source",
      },
      {
        url: "https://download.ben-siebert.com/projects/senos/SenOS_essay_2021.pdf",
        icon: <FaFileLines />,
        text: "Essay",
      },
    ],
    image: "https://avatars.githubusercontent.com/u/69637254?s=200&v=4",
    awards: [
      {
        title: "1st Place (regional)",
        issuedBy: "Jugend forscht",
      },
    ],
  },
  {
    name: "InCode",
    identifier: "incode",
    caption:
      "InCode is a programming language which can be used to create websites. It uses natural language.",
    links: [
      {
        url: "https://github.com/coolescoden/InCode",
        icon: <FaGithub />,
        text: "Source",
      },
      {
        url: "https://download.ben-siebert.com/projects/incode/InCode_essay_2022.pdf",
        icon: <FaFileLines />,
        text: "Essay",
      },
    ],
    image: "https://avatars.githubusercontent.com/u/83610050?s=200&v=4",
    awards: [
      {
        title: "1st Place (regional)",
        issuedBy: "Jugend forscht",
      },
      {
        title: "1st Place (landwide)",
        issuedBy: "Jugend forscht",
      },
      {
        title: "Special prize for the most creatively valuable work",
        issuedBy:
          "Ministerium für Schule und Bildung des Landes Nordrhein-Westfalen",
      },
    ],
  },
  {
    name: "CodeUp",
    identifier: "codeup",
    caption:
      "CodeUp is a platform for learning programming. It includes a full featured online IDE and much more.",
    links: [
      {
        url: "https://download.ben-siebert.com/projects/codeup/CodeUp_essay_2023.pdf",
        icon: <FaFileLines />,
        text: "Essay",
      },
      {
        url: "https://codeup.space",
        icon: <FaGlobe />,
        text: "Website",
      },
    ],
    image: "https://codeup.space/codeup.png",
    awards: [
      {
        title: "1st Place (regional)",
        issuedBy: "Jugend forscht",
      },
      {
        title: "Special prize",
        issuedBy: "Hengst SE",
      },
      {
        title: "1st Place (landwide)",
        issuedBy: "Jugend forscht",
      },
      {
        title: 'Participation at the Summer Academy "JugendUnternimmt"',
        issuedBy: "Internationale Martin Luther Stiftung",
      },
      {
        title: "2nd Place (national)",
        issuedBy: "STARTUPTEENS",
      },
    ],
  },
  {
    name: "SaveWorld",
    identifier: "saveworld",
    caption:
      "SenOS is an operating system that helps beginners and old people to use a computer. It does not require any knowledge about computers.",
    links: [
      {
        url: "https://saveworld.one",
        icon: <FaGlobe />,
        text: "Website",
      },
      {
        url: "https://saveworld.one/download",
        icon: <FaApple />,
        text: "Download",
      },
    ],
    image:
      "https://content.saveworld.one/assets/7de3ae7c-0d86-416a-a761-93403ae870ca",
    awards: [],
  },
];
