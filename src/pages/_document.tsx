/**
 * src/pages/_document.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 16.12.2023
 *
 */

import * as React from "react";
import { Head, Html, Main, NextScript } from "next/document";

export default function DocumentLayout() {
  return (
    <>
      <Html>
        <Head></Head>
        <NextScript />
        <Main />
      </Html>
    </>
  );
}
