import config from "./index.ts";

test("config", () => {
  expect(config({url: import.meta.url})).toBeObject();
});
