// @flow

import type { Node } from "react";
import type { PortalRef } from "./types";

import React from "react";
import { createPortal } from "react-dom";
import { Consumer } from "./context";

type Props = {
  children: ?Node
};

export default ({ children }: Props) => (
  <Consumer>
    {(portalRef: PortalRef) =>
      portalRef ? createPortal(children, portalRef) : null
    }
  </Consumer>
);
