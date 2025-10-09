# prettier-config-silverwind [![](https://img.shields.io/npm/v/prettier-config-silverwind.svg)](https://www.npmjs.org/package/prettier-config-silverwind) [![](https://img.shields.io/badge/licence-bsd-blue.svg)](https://raw.githubusercontent.com/silverwind/prettier-config-silverwind/master/LICENSE)

Shared prettier configuration

```js
import {nodeLib} from "prettier-config-silverwind";
import {defineConfig} from "prettier";

export default defineConfig(nodeLib({url: import.meta.url}));
```

© [silverwind](https://github.com/silverwind), distributed under BSD licence.
