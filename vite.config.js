import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { createGuestbookHandler } from "./server/guestbook.mjs";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  for (const key of ["MONGODB_URI", "MONGODB_DB", "GUESTBOOK_RATE_SECRET"]) {
    if (env[key]) process.env[key] = env[key];
  }
  return {
    plugins: [react(), tailwindcss(), {
      name: "local-guestbook-api",
      configureServer(server) {
        const handler = createGuestbookHandler();
        server.middlewares.use((req, res, next) => {
          if (req.url.split("?")[0] === "/api/guestbook") return handler(req, res);
          next();
        });
      },
    }],
  };
});
