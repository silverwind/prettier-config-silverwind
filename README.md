# prettier-config-silverwind
[![](https://img.shields.io/npm/v/prettier-config-silverwind.svg)](https://www.npmjs.org/package/prettier-config-silverwind) [![](https://packagephobia.com/badge?p=prettier-config-silverwind)](https://packagephobia.com/result?p=prettier-config-silverwind)

> Shared prettier configuration

## Usage

```sh
pnpm add -D prettier-config-silverwind
```

In `prettier.config.ts`:

```ts
import silverwind from "prettier-config-silverwind";

export default silverwind({url: import.meta.url});
```

© [silverwind](https://github.com/silverwind), distributed under BSD licence
