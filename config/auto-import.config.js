import { VueRouterAutoImports } from "unplugin-vue-router"
import { unheadVueComposablesImports } from "@unhead/vue"


export default {
    // =Targets to transform
        include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
    ],

    // =Global imports to register
    imports: [
        // =Presets
        "vue",
        // "vue-router",
        {
            "@vueuse/core": [
                "useMouse",
            ],
        },
        VueRouterAutoImports,
        unheadVueComposablesImports,
        {
            "vue-toastification": [
                "useToast",
            ],
        },
        {
            "vue-i18n": [
                "useI18n",
            ],
        }
    ],
    // =Enable auto import by filename for default module exports under directories
    defaultExportByFilename: false,

    // =Auto import for module exports under directories
    // =by default it only scan one level of modules under the directory
    dirs: [
        // "./hooks",
        "./composables", // only root modules
        //"./src/composables/**", // all nested modules
    ],

    // =Filepath to generate corresponding .d.ts file.
    // =Defaults to "./auto-imports.d.ts" when `typescript` is installed locally.
    // =Set `false` to disable.
    dts: "./types/auto-imports.d.ts",

    // =Auto import inside Vue template
    // =see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
    vueTemplate: false,

    // =Custom resolvers, compatible with `unplugin-vue-components`
    // =see https://github.com/antfu/unplugin-auto-import/pull/23/
    resolvers: [
      // "unplugin-components",
      // "unplugin-icons",
    ],

    // =Inject the imports at the end of other imports
    injectAtEnd: true,

    // =Generate corresponding .eslintrc-auto-import.json file.
    // =eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    eslintrc: {
        enabled: false, // Defaults to `false`
        filepath: "./.eslintrc-auto-import.json", // Defaults to `./.eslintrc-auto-import.json`
        globalsPropValue: true, // =Defaults to `true`, (true | false | "readonly" | "readable" | "writable" | "writeable")
    },
}
