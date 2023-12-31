/**
 * src/pages/legal-notice.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 31.12.2023
 *
 */

import * as React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";

export default function LegalNotice() {
  return (
    <>
      <Head>
        <title>Legal Notice | Ben Siebert - Software Engineer & Student</title>
      </Head>
      <Flex align="center" justify="center" w={"100%"} minH={[0, "100vh"]}>
        <Stack
          spacing={8}
          w="100%"
          maxW="800px"
          p={8}
          bgColor={["transparent", "black"]}
          rounded="lg"
          shadow={["none", "xl"]}
        >
          <Heading as="h1" size="2xl" textAlign={["center", "initial"]}>
            Impressum
          </Heading>
          <Heading as="h2" size="xl" textAlign={["center", "initial"]}>
            Angaben gemäß § 5 TMG
          </Heading>
          <Text fontSize={"lg"}>
            Ben Siebert
            <br />
            Im Mühlenwinkel 14
            <br />
            45525 Hattingen
          </Text>
          <Heading as="h2" size="xl" textAlign={["center", "initial"]}>
            Kontakt
          </Heading>
          <Text fontSize={"lg"}>
            E-Mail:&nbsp;
            <Link href="mailto:hello@ben-siebert.de" color={"blue.400"}>
              hello@ben-siebert.de
            </Link>
          </Text>
          <Heading as="h2" size="xl" textAlign={["center", "initial"]}>
            Redaktionell Verantwortlicher
          </Heading>
          <Text fontSize={"lg"}>Ben Siebert</Text>
        </Stack>
      </Flex>
    </>
  );
}
