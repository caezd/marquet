import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";

const name = "Marquet";
const plugins = [
    /* terser(), */
    external({ includeDependencies: true }),
    resolve(),
    commonjs(),
];

export default [
    {
        input: "src/main.js",
        output: [
            {
                name,
                file: `dist/${name}.js`,
                format: "iife",
            },
            {
                file: `dist/${name}.esm.js`,
                format: "es",
            },
        ],
        plugins: plugins,
    },
];
