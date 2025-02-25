import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  build: {
    outDir: "dist", // Ensure this is correct
  },
  base: "/", // Important for correct routing
});
