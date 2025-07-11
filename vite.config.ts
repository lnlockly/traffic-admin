import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        //global variables
        additionalData: `@use "/src/app/styles/variables.scss" as *;`,
      },
    },
  },
});
