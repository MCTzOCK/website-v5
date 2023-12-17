/**
 * src/pages/blog/[id].tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 17.12.2023
 *
 */

import * as React from "react";
import { useEffect, useState } from "react";
import { getDirectus } from "@/directus";
import { readItem, readItems } from "@directus/sdk";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function BlogViewer() {
  const [post, setPost] = useState<{
    id: number;
    title: string;
    hero_image: string;
    published_at: string;
    content: string;
  } | null>(null);

  const directus = getDirectus();

  const { id } = useRouter().query;

  useEffect(() => {
    // @ts-ignore
    directus.request(readItem("website_post", id)).then((data) => {
      setPost(data as any);
      console.log(data);
    });
  }, [id]);

  if (!post) {
    return <>Loading...</>;
  }

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
            <Text fontSize={"xl"}>
              Published on {new Date(post.published_at).toLocaleDateString()}
            </Text>
            <Heading fontSize={"4xl"} fontWeight={1000}>
              {post.title}
            </Heading>
            <Text mt={4} fontSize={"xl"} lineHeight={2}>
              {post.content}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
