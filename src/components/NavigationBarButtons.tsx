/**
 * src/components/NavigationBarButtons.tsx
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
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import NavigationBarButtonsMenu from "@/components/NavigationBarButtonsMenu";

export default function NavigationBarButtons() {
  const isMobile = useMediaQuery("(max-width: 1000px)")[0];

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isMobile) {
    return (
      <>
        <Drawer isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent
            w={"100%"}
            h={"fit-content"}
            minH={"100%"}
            bg={"black"}
          >
            <DrawerHeader>
              <Heading>Menu</Heading>
            </DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody>
              <NavigationBarButtonsMenu onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <IconButton
          aria-label={"Menu"}
          icon={<FaBars />}
          size={"lg"}
          onClick={onOpen}
        />
      </>
    );
  }

  return (
    <>
      <NavigationBarButtonsMenu onClose={() => {}} />
    </>
  );
}
