// @flow

import type { PortalRef } from "./types";

import { createContext } from "react";

export const { Consumer, Provider } = createContext((null: PortalRef));
