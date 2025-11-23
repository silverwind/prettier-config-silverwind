import type {Config} from "prettier";

export type CustomConfig = Config & {url: string};

export default function ({url: _url, ...other}: CustomConfig): Config {
  return {
    arrowParens: "avoid",
    bracketSameLine: false,
    bracketSpacing: false,
    embeddedLanguageFormatting: "auto",
    endOfLine: "lf",
    htmlWhitespaceSensitivity: "css",
    jsxSingleQuote: false,
    objectWrap: "preserve",
    printWidth: Infinity,
    proseWrap: "preserve",
    quoteProps: "consistent",
    semi: true,
    singleAttributePerLine: false,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "es5",
    useTabs: false,
    vueIndentScriptAndStyle: false,
    ...other,
  };
}
