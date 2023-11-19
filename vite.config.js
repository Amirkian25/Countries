import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import { unheadVueComposablesImports } from '@unhead/vue'
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [unheadVueComposablesImports],
    }),
  ],
});
