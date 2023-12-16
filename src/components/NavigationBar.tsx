/**
 * src/components/NavigationBar.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 16.12.2023
 *
 */

import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import NavigationBarTitle from "@/components/NavigationBarTitle";
import NavigationBarButtons from "@/components/NavigationBarButtons";

export default function NavigationBar() {
  return (
    <>
      <Flex
        w={"100%"}
        bg={"black"}
        h={"fit-content"}
        padding={4}
        gap={4}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <NavigationBarTitle />
        <NavigationBarButtons />
      </Flex>
    </>
  );
}
