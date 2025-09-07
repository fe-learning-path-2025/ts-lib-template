// @ts-check
import js from "@eslint/js";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default [
    { ignores: ["dist/**", "coverage/**"] },
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module"
            }
        },
        plugins: { "@typescript-eslint": tseslintPlugin },
        rules: {
            ...js.configs.recommended.rules,
            ...tseslintPlugin.configs.recommended.rules,
            ...tseslintPlugin.configs.stylistic.rules
        }
    },
    {
        files: ["src/**/*.ts", "src/**/*.tsx"],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                projectService: true
            }
        },
        plugins: { "@typescript-eslint": tseslintPlugin },
        rules: {
            ...tseslintPlugin.configs["recommended-type-checked"].rules,
            ...tseslintPlugin.configs["stylistic-type-checked"].rules
        }
    },
    prettier
];
