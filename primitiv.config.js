/** @type {import('@ai-by-design/primitiv').PrimitivConfig} */
export default {
  sources: {
    codebase: {
      root: "./src",
      include: ["**/*.tsx", "**/*.ts", "**/*.css"],
    },
  },
  governance: {
    sourceOfTruth: "codebase",
  },
};
