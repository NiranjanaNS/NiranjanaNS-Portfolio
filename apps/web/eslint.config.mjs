import { FlatCompat } from "@eslint/eslintrc";
import baseConfig from "@niranjanans/eslint-config/base";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...baseConfig,
  {
    ignores: [".next/**", "next-env.d.ts"],
  },
];
