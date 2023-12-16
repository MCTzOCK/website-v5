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
import { Component } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/chakra";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function AppLayout({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <ChakraProvider theme={theme}>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
