import * as React from "react"
import { StoreProvider } from "./src/context/storeContext"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)