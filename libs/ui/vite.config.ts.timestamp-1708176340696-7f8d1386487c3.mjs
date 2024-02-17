// libs/ui/vite.config.ts
import { defineConfig } from "file:///home/mcesarcz/personal-homepage-2024/node_modules/.pnpm/vite@5.0.12_@types+node@18.16.9_sass@1.62.1/node_modules/vite/dist/node/index.js";
import react from "file:///home/mcesarcz/personal-homepage-2024/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.0.12/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///home/mcesarcz/personal-homepage-2024/node_modules/.pnpm/vite-plugin-dts@2.3.0_@types+node@18.16.9_vite@5.0.12/node_modules/vite-plugin-dts/dist/index.mjs";
import * as path from "path";
import { nxViteTsPaths } from "file:///home/mcesarcz/personal-homepage-2024/node_modules/.pnpm/@nx+vite@18.0.2_@swc-node+register@1.6.8_@swc+core@1.3.107_@types+node@18.16.9_nx@18.0.2_type_sw7lgrlugroyob4o2yxauze6da/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import svgr from "file:///home/mcesarcz/personal-homepage-2024/node_modules/.pnpm/vite-plugin-svgr@4.2.0_typescript@5.3.3_vite@5.0.12/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "/home/mcesarcz/personal-homepage-2024/libs/ui";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  cacheDir: "../../node_modules/.vite/libs/ui",
  plugins: [
    react(),
    nxViteTsPaths(),
    svgr(),
    dts({
      entryRoot: "src",
      tsConfigFilePath: path.join(__vite_injected_original_dirname, "tsconfig.lib.json"),
      skipDiagnostics: true
    })
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: "../../dist/libs/ui",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "ui",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["react", "react-dom", "react/jsx-runtime"]
    }
  },
  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest"
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/libs/ui",
      provider: "v8"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGlicy91aS92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL21jZXNhcmN6L3BlcnNvbmFsLWhvbWVwYWdlLTIwMjQvbGlicy91aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbWNlc2FyY3ovcGVyc29uYWwtaG9tZXBhZ2UtMjAyNC9saWJzL3VpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21jZXNhcmN6L3BlcnNvbmFsLWhvbWVwYWdlLTIwMjQvbGlicy91aS92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPSd2aXRlc3QnIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgbnhWaXRlVHNQYXRocyB9IGZyb20gJ0BueC92aXRlL3BsdWdpbnMvbngtdHNjb25maWctcGF0aHMucGx1Z2luJztcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiBfX2Rpcm5hbWUsXG4gIGNhY2hlRGlyOiAnLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlL2xpYnMvdWknLFxuXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG54Vml0ZVRzUGF0aHMoKSxcbiAgICBzdmdyKCksXG4gICAgZHRzKHtcbiAgICAgIGVudHJ5Um9vdDogJ3NyYycsXG4gICAgICB0c0NvbmZpZ0ZpbGVQYXRoOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAndHNjb25maWcubGliLmpzb24nKSxcbiAgICAgIHNraXBEaWFnbm9zdGljczogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcblxuICAvLyBVbmNvbW1lbnQgdGhpcyBpZiB5b3UgYXJlIHVzaW5nIHdvcmtlcnMuXG4gIC8vIHdvcmtlcjoge1xuICAvLyAgcGx1Z2luczogWyBueFZpdGVUc1BhdGhzKCkgXSxcbiAgLy8gfSxcblxuICAvLyBDb25maWd1cmF0aW9uIGZvciBidWlsZGluZyB5b3VyIGxpYnJhcnkuXG4gIC8vIFNlZTogaHR0cHM6Ly92aXRlanMuZGV2L2d1aWRlL2J1aWxkLmh0bWwjbGlicmFyeS1tb2RlXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnLi4vLi4vZGlzdC9saWJzL3VpJyxcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcbiAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlLFxuICAgIH0sXG4gICAgbGliOiB7XG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHMuXG4gICAgICBlbnRyeTogJ3NyYy9pbmRleC50cycsXG4gICAgICBuYW1lOiAndWknLFxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXG4gICAgICAvLyBDaGFuZ2UgdGhpcyB0byB0aGUgZm9ybWF0cyB5b3Ugd2FudCB0byBzdXBwb3J0LlxuICAgICAgLy8gRG9uJ3QgZm9yZ2V0IHRvIHVwZGF0ZSB5b3VyIHBhY2thZ2UuanNvbiBhcyB3ZWxsLlxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIEV4dGVybmFsIHBhY2thZ2VzIHRoYXQgc2hvdWxkIG5vdCBiZSBidW5kbGVkIGludG8geW91ciBsaWJyYXJ5LlxuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0L2pzeC1ydW50aW1lJ10sXG4gICAgfSxcbiAgfSxcblxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBjYWNoZToge1xuICAgICAgZGlyOiAnLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlc3QnLFxuICAgIH0sXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgaW5jbHVkZTogWydzcmMvKiovKi57dGVzdCxzcGVjfS57anMsbWpzLGNqcyx0cyxtdHMsY3RzLGpzeCx0c3h9J10sXG5cbiAgICByZXBvcnRlcnM6IFsnZGVmYXVsdCddLFxuICAgIGNvdmVyYWdlOiB7XG4gICAgICByZXBvcnRzRGlyZWN0b3J5OiAnLi4vLi4vY292ZXJhZ2UvbGlicy91aScsXG4gICAgICBwcm92aWRlcjogJ3Y4JyxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixZQUFZLFVBQVU7QUFDdEIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxVQUFVO0FBTmpCLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUVWLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLEtBQUs7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNGLFdBQVc7QUFBQSxNQUNYLGtCQUF1QixVQUFLLGtDQUFXLG1CQUFtQjtBQUFBLE1BQzFELGlCQUFpQjtBQUFBLElBQ25CLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixzQkFBc0I7QUFBQSxJQUN0QixpQkFBaUI7QUFBQSxNQUNmLHlCQUF5QjtBQUFBLElBQzNCO0FBQUEsSUFDQSxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQTtBQUFBO0FBQUEsTUFHVixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsSUFDdkI7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVSxDQUFDLFNBQVMsYUFBYSxtQkFBbUI7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYixTQUFTLENBQUMsc0RBQXNEO0FBQUEsSUFFaEUsV0FBVyxDQUFDLFNBQVM7QUFBQSxJQUNyQixVQUFVO0FBQUEsTUFDUixrQkFBa0I7QUFBQSxNQUNsQixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
