import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

// Array of extensions to be handled
const EXTENSIONS = [".ts", ".tsx"];

// Excluded dependencies - dev dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

export default [
  {
    input: ["src/index.tsx"], // What files we build?
    output: {
      dir: "dist", // Directory where rollup.js will put the built files
      sourcemap: true, // We want a source map to trace the original code
      format: "esm", // Built files will follow ESM format
      preserveModules: true, // This one is important for treeshaking features of our library
    },
    plugins: [
      peerDepsExternal(), // https://rollupjs.org/guide/en/#peer-dependencies
      resolve(), // Resolves node modules
      typescript({ jsx: "react" }),
    ],
    external: EXTERNAL, // https://rollupjs.org/guide/en/#peer-dependencies
  },
  {
    input: ["src/index.tsx"], // What files we build?
    output: {
      name: "Component",
      file: "dist/index.umd.js",
      format: "umd", // Built files will follow UMD format
      globals: {
        react: "React",
      },
    },
    plugins: [
      peerDepsExternal(), // https://rollupjs.org/guide/en/#peer-dependencies
      resolve(), // Resolves node modules
      typescript({ jsx: "react" }),
    ],
    external: EXTERNAL, // https://rollupjs.org/guide/en/#peer-dependencies
  },
];
