// @flow

import { createContext } from "react";
import type { PortalRef } from "./types";

export const { Consumer, Provider } = createContext((null: PortalRef));
