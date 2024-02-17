// apps/spa/vite.config.ts
import { defineConfig } from "file:///home/mcesarcz/personal-homepage-2024/node_modules/.pnpm/vite@5.0.12_@types+node@18.16.9_sass@1.62.1/node_modules/vite/dist/node/index.js";
import react from "file:///home/mcesarcz/personal-homepage-2024/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.0.12/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { nxViteTsPaths } from "file:///home/mcesarcz/personal-homepage-2024/node_modules/.pnpm/@nx+vite@18.0.2_@swc-node+register@1.6.8_@swc+core@1.3.107_@types+node@18.16.9_nx@18.0.2_type_sw7lgrlugroyob4o2yxauze6da/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import svgr from "file:///home/mcesarcz/personal-homepage-2024/node_modules/.pnpm/vite-plugin-svgr@4.2.0_typescript@5.3.3_vite@5.0.12/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "/home/mcesarcz/personal-homepage-2024/apps/spa";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  cacheDir: "../../node_modules/.vite/apps/spa",
  server: {
    port: 4200,
    host: "localhost"
  },
  preview: {
    port: 4300,
    host: "localhost"
  },
  plugins: [react(), nxViteTsPaths(), svgr()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: "../../dist/apps/spa",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
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
      reportsDirectory: "../../coverage/apps/spa",
      provider: "v8"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXBwcy9zcGEvdml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tY2VzYXJjei9wZXJzb25hbC1ob21lcGFnZS0yMDI0L2FwcHMvc3BhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9tY2VzYXJjei9wZXJzb25hbC1ob21lcGFnZS0yMDI0L2FwcHMvc3BhL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21jZXNhcmN6L3BlcnNvbmFsLWhvbWVwYWdlLTIwMjQvYXBwcy9zcGEvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz0ndml0ZXN0JyAvPlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgbnhWaXRlVHNQYXRocyB9IGZyb20gJ0BueC92aXRlL3BsdWdpbnMvbngtdHNjb25maWctcGF0aHMucGx1Z2luJztcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiBfX2Rpcm5hbWUsXG4gIGNhY2hlRGlyOiAnLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlL2FwcHMvc3BhJyxcblxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA0MjAwLFxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICB9LFxuXG4gIHByZXZpZXc6IHtcbiAgICBwb3J0OiA0MzAwLFxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICB9LFxuXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBueFZpdGVUc1BhdGhzKCksIHN2Z3IoKV0sXG5cbiAgLy8gVW5jb21tZW50IHRoaXMgaWYgeW91IGFyZSB1c2luZyB3b3JrZXJzLlxuICAvLyB3b3JrZXI6IHtcbiAgLy8gIHBsdWdpbnM6IFsgbnhWaXRlVHNQYXRocygpIF0sXG4gIC8vIH0sXG5cbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuLi8uLi9kaXN0L2FwcHMvc3BhJyxcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcbiAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgY2FjaGU6IHtcbiAgICAgIGRpcjogJy4uLy4uL25vZGVfbW9kdWxlcy8udml0ZXN0JyxcbiAgICB9LFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIGluY2x1ZGU6IFsnc3JjLyoqLyoue3Rlc3Qsc3BlY30ue2pzLG1qcyxjanMsdHMsbXRzLGN0cyxqc3gsdHN4fSddLFxuXG4gICAgcmVwb3J0ZXJzOiBbJ2RlZmF1bHQnXSxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcmVwb3J0c0RpcmVjdG9yeTogJy4uLy4uL2NvdmVyYWdlL2FwcHMvc3BhJyxcbiAgICAgIHByb3ZpZGVyOiAndjgnLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxVQUFVO0FBSmpCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUVWLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBRUEsU0FBUyxDQUFDLE1BQU0sR0FBRyxjQUFjLEdBQUcsS0FBSyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU8xQyxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixzQkFBc0I7QUFBQSxJQUN0QixpQkFBaUI7QUFBQSxNQUNmLHlCQUF5QjtBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLGFBQWE7QUFBQSxJQUNiLFNBQVMsQ0FBQyxzREFBc0Q7QUFBQSxJQUVoRSxXQUFXLENBQUMsU0FBUztBQUFBLElBQ3JCLFVBQVU7QUFBQSxNQUNSLGtCQUFrQjtBQUFBLE1BQ2xCLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
