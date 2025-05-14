module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        tsConfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint/eslint-plugin"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "next/core-web-vitals",
        "prettier",
    ],
    root: true,
    ignorePatterns: [".eslintrc.js", "commitlint.config.js"],
    rules: {
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-floating-promises": "off",
    },
};
