/**
 * src/pages/blog/index.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 17.12.2023
 *
 */

import * as React from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { getDirectus } from "@/directus";
import { useEffect, useState } from "react";
import { readItems } from "@directus/sdk";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";

export default function Index() {
  const [posts, setPosts] = useState<
    {
      id: number;
      title: string;
      hero_image: string;
      published_at: string;
      content: string;
    }[]
  >([]);

  const directus = getDirectus();

  useEffect(() => {
    // @ts-ignore
    directus.request(readItems("website_post", {})).then((data) => {
      setPosts(data as any);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Ben Siebert's Blog - Software Engineer & Student</title>
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
            bg={"gray.900"}
            p={8}
            rounded={"xl"}
            shadow={"xl"}
            maxW={["100%", "90%", "90%", "90%", "60%"]}
            w={"100%"}
          >
            <Heading fontSize={"4xl"} fontWeight={1000}>
              Blog
            </Heading>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={4}
              mt={4}
            >
              {posts.map((p) => {
                return (
                  <>
                    <Card bg={"black"}>
                      <CardHeader>
                        <Heading>{p.title}</Heading>
                      </CardHeader>
                      <CardBody>
                        <Text fontSize={"xl"}>
                          This post was published on{" "}
                          {new Date(p.published_at).toLocaleDateString()}.
                        </Text>
                        <Button
                          w={"100%"}
                          mt={4}
                          leftIcon={<FaEye />}
                          as={Link}
                          href={"/blog/" + p.id}
                        >
                          Read
                        </Button>
                      </CardBody>
                    </Card>
                  </>
                );
              })}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
