export default {
    dts: "./types/components.d.ts",
    types: [{
        from: "vue-router/auto",
        names: [ "RouterLink", "RouterView" ],
    }],

    dirs: [
        "components",
    ],
    extensions: [ "vue", "js", "ts" ],
    deep: true,
    directoryAsNamespace: true,
}
