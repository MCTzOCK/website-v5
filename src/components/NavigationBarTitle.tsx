/**
 * src/components/NavigationBarTitle.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 16.12.2023
 *
 */

import * as React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function NavigationBarTitle() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={"/assets/images/ben/2.jpeg"}
          alt={"Ben Siebert"}
          width={20}
          rounded={"lg"}
          shadow={"xl"}
        />
      </Link>
    </>
  );
}
