// @flow

import React from "react";
import renderer from "react-test-renderer";
import { Consumer, Provider } from "../";

const render = v => renderer.create(v).toJSON();

test("defaults to null", () => {
  expect(
    render(
      <div>
        <Consumer>{v => (v === null ? "yep" : "nup")}</Consumer>
      </div>
    )
  ).toEqual(render(<div>yep</div>));
});
