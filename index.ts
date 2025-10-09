import type {Config} from "prettier";

export type CustomConfig = Config & {url: string};

export default function({url: _url, ...other}: CustomConfig): Config {
  return {
    arrowParens: "avoid",
    bracketSameLine: false,
    bracketSpacing: false,
    embeddedLanguageFormatting: "auto",
    endOfLine: "lf",
    htmlWhitespaceSensitivity: "css",
    jsxSingleQuote: false,
    objectWrap: "preserve",
    proseWrap: "preserve",
    quoteProps: "consistent",
    semi: true,
    singleAttributePerLine: false,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "all",
    useTabs: false,
    vueIndentScriptAndStyle: false,
    ...other,
  };
}
