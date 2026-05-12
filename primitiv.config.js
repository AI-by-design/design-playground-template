// Detected: next + Tailwind + TypeScript
/** @type {import('@ai-by-design/primitiv').PrimitivConfig} */
module.exports = {
  sources: {
    codebase: {
      root: "./src",
      patterns: ["**/*.css", "**/*.ts", "**/*.tsx"],
      ignore: ["**/node_modules/**", "**/dist/**", "**/.next/**"],
    },
    // Uncomment to add Figma as a source:
    // figma: {
    //   token: process.env.FIGMA_ACCESS_TOKEN,
    //   fileId: "your-figma-file-id"
    // },
    // Uncomment to add Storybook as a source:
    // storybook: {
    //   url: "http://localhost:6006",
    //   sourceRoot: "."
    // },
  },

  governance: {
    // Which source wins when values conflict: "codebase" | "figma" | "storybook" | "manual"
    sourceOfTruth: "codebase",
    // What to do when a conflict is found: "error" | "warn" | "auto-resolve"
    onConflict: "warn",
  },

  output: {
    path: "./primitiv.contract.json",
  },
};
