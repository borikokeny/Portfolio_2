import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/Portfolio_2/" : "/", // GitHub Pages fix only in production
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    port: 5173, // Keep a fixed port
    strictPort: true, // Prevent auto-changing ports
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/scss/_variables.scss";`,
      },
    },
  },
}));




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "src/scss/_variables.scss";`,
//         includePaths: ["node_modules"], 
//       }
//     }
//   },
//   base: "/Portfolio_2/",
// });



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@use "bootstrap/scss/functions" as *;`
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//       'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
//     }
//   },
//   base: mode === "production" ? "/Portfolio_2/" : "/",
// });



// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig(({ command, mode }) => {
//   return {
//     plugins: [react()],
//     // base: "/Portfolio_2/",
//     base: mode === "production" ? "/Portfolio_2/" : "/", // Fix for local vs. GitHub Pages
//     css: {
//       preprocessorOptions: {
//         scss: {
//           additionalData: `@import "src/scss/_variables.scss";`,
//         },
//       },
//     },
//   };
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "src/scss/_variables.scss";`
//       }
//     }
//   }
// });
