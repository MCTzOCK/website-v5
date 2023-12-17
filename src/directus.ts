/**
 * src/directus.ts
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 17.12.2023
 *
 */

import { createDirectus, rest } from "@directus/sdk";

export const getDirectus = () => {
  return createDirectus<{
    website_post: {
      id: number;
      title: string;
      hero_image: string;
      published_at: string;
      content: string;
    };
  }>("https://content.ben-siebert.com").with(rest());
};
