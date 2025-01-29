import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    extends: [],
    plugins: [],
    rules: {},
  },
})

const eslintConfig = [
  ...compat.extends(
    "eslint:recommended", // 基本ルール
    "plugin:@typescript-eslint/recommended", // 型関連ルール
    "next/core-web-vitals", // Next.js ルール
    "next/typescript", // Next.js の型サポート
    "plugin:tailwindcss/recommended", // TailwindCSSルール
    "prettier", // Prettierの設定
    "plugin:prettier/recommended" // Prettier連携用のルール
  ),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "tailwind.config.ts"],
    rules: {
      semi: ["error", "never"], // セミコロンを禁止
      "prettier/prettier": ["error"], // Prettierのルールを適用
      "tailwindcss/classnames-order": "warn", // TailwindCSSのクラス順を警告
      "tailwindcss/no-custom-classname": "off", // カスタムクラスのエラーを無視
    },
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "public/**",
      "coverage/**",
      "dist/**",
      "gql/**",
    ],
  },
]

export default eslintConfig
