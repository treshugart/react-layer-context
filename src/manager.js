// @flow

import type { Node } from "react";
import type { PortalRef } from "./types";

import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Provider } from "./context";

type Props = {
  children: Node,
  zIndex: number
};

type State = {
  portalRef: PortalRef
};

export default class extends Component<Props, State> {
  static defaultProps = {
    zIndex: 1000
  };
  state = {
    portalRef: null
  };
  setPortalRef = (portalRef: PortalRef) => {
    this.setState({ portalRef });
  };
  render() {
    const {
      props: { children, zIndex },
      state: { portalRef }
    } = this;
    return (
      <div>
        <div ref={this.setPortalRef} style={{ zIndex }} />
        <Provider value={portalRef}>{children}</Provider>
      </div>
    );
  }
}
