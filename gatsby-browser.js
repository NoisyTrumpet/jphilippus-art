import * as React from "react"
import { StoreProvider } from "./src/context/storeContext"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)

const isBrowser = typeof window !== `undefined`

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  script.type = `text/javascript`
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  if (isBrowser) {
    setTimeout(
      (window.onload = () => {
        addScript(
          "https://cdn.sesami.co/shopify.js?shop=j-philippus-art-studio.myshopify.com"
        )
      }),
      1000
    )
  }
}
