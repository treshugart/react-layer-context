// @flow

import { Consumer, Layer, Manager, Provider } from "..";

test("exports", () => {
  expect(typeof Consumer).toBe("object");
  expect(typeof Layer).toBe("function");
  expect(typeof Manager).toBe("function");
  expect(typeof Provider).toBe("object");
});
