// @flow

import type { PortalRef } from "./types";

import * as React from "react";
import { createPortal } from "react-dom";
import { Consumer } from "./context";

type Props = {
  children: ?React.Node
};

export const Layer = ({ children }: Props) => (
  <Consumer>
    {(portalRef: PortalRef) =>
      portalRef ? createPortal(children, portalRef) : null
    }
  </Consumer>
);
