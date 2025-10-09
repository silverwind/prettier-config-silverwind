import {defineConfig} from "prettier";
import {nodeLib} from "./index.ts";

export default defineConfig(nodeLib({
  url: import.meta.url,
}));
