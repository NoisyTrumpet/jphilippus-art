import * as React from "react"
import { StoreProvider } from "./src/context/storeContext"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript(
      "https://cdn.sesami.co/shopify.js?shop=j-philippus-art-studio.myshopify.com"
    )
  }
}
