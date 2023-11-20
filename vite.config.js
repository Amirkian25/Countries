import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite"
import ComponentsConfig from "./config/components.config"
import UnheadVite from "@unhead/addons/vite"
import VueRouter from 'unplugin-vue-router/vite'
import VueRouterConfig from "./config/vue-router.config.js"
import { defineConfig } from "vite";
import { unheadVueComposablesImports } from '@unhead/vue'
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(VueRouterConfig),    // ⚠️ Vue() must be placed after VueRouter()
    UnheadVite(),
    Components(ComponentsConfig), // auto import components
    AutoImport({
      imports: [unheadVueComposablesImports],
    }),
    vue(),
  ],
});
