/**
 * src/theme/chakra.ts
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 16.12.2023
 *
 */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      "50": "#E9F2FB",
      "100": "#C1D9F5",
      "200": "#9AC1EF",
      "300": "#72A9E8",
      "400": "#4B90E2",
      "500": "#2378DC",
      "600": "#1C60B0",
      "700": "#154884",
      "800": "#0E3058",
      "900": "#07182C",
    },
    gray: {
      "50": "#F2F2F2",
      "100": "#DBDBDB",
      "200": "#C4C4C4",
      "300": "#ADADAD",
      "400": "#969696",
      "500": "#808080",
      "600": "#666666",
      "700": "#4D4D4D",
      "800": "#333333",
      "900": "#1A1A1A",
    },
    black: "#121212",
  },
  fonts: {
    body: "Geist, sans-serif",
    heading: "Geist, sans-serif",
    mono: "Geist, sans-serif",
  },
  // default heading color: brand.500
  components: {
    Button: {
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "brand.500",
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: "gray.900",
      },
    }),
  },
});
