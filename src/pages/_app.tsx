/**
 * src/pages/_app.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 16.12.2023
 *
 */

import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/chakra";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import "@/theme/globals.css";
import { NextSeo } from "next-seo";
import Script from "next/script";

export default function AppLayout({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <>
      <NextSeo
        title={"Ben Siebert"}
        description={
          "Ben Siebert is a 16 year old software engineer and student from Germany. He loves to code and he's always looking for new projects to work on."
        }
        openGraph={{
          url: "https://ben-siebert.com",
          title: "Ben Siebert",
          description:
            "Ben Siebert is a 16 year old software engineer and student from Germany. He loves to code and he's always looking for new projects to work on.",
          images: [
            {
              url: "https://ben-siebert.com/assets/images/ben/2.jpeg",
              width: 800,
              height: 600,
              alt: "Ben Siebert",
            },
          ],
          site_name: "Ben Siebert",
        }}
        twitter={{
          handle: "@OfficialMCTzOCK",
          site: "@OfficialMCTzOCK",
          cardType: "summary_large_image",
        }}
        themeColor={"#2378DC"}
      />
      <Script src="https://observability.codeup.space/api/analytics/script?appId=67236c2ad0067b3a2d5029ab" />
      <ChakraProvider theme={theme}>
        <NavigationBar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}
