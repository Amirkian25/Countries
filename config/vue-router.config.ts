//import type { Options } from "unplugin-vue-router"
import { getPascalCaseRouteName } from "unplugin-vue-router"

export default {
    // Folder(s) to scan for vue components and generate routes. Can be a string, or
    // an object, or an array of those. Each option allows to override global options.
    // like exclude, extensions, etc.
    routesFolder: "pages",

    // allowed extensions for components to be considered as pages
    // can also be a suffix: e.g. `.page.vue` will match `home.page.vue`
    // but remove it from the route path
    extensions: [ ".vue" ],

    // list of glob files to exclude from the routes generation
    // e.g. ["**/__*"] will exclude all files and folders starting with `__`
    // e.g. ["**/__*/**/*"] will exclude all files within folders starting with `__`
    // e.g. ["**/*.component.vue"] will exclude components ending with `.component.vue`
    exclude: [],

    // Path for the generated types. Defaults to `./typed-router.d.ts` if typescript
    // is installed. Can be disabled by passing `false`.
    dts: "./types/typed-router.d.ts",

    // Override the name generation of routes. unplugin-vue-router exports two versions:
    // `getFileBasedRouteName()` (the default) and `getPascalCaseRouteName()`. Import any
    // of them within your `vite.config.ts` file.
    getRouteName: (routeNode) => getPascalCaseRouteName(routeNode),

    // Customizes the default langage for `<route>` blocks
    // json5 is just a more permissive version of json
    routeBlockLang: "json5",

    // Change the import mode of page components. Can be "async", "sync", or a function with the following signature:
    // (filepath: string) => "async" | "sync"
    importMode: "async",
} //as Options
