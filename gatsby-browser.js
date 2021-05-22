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

  // window.addEventListener('sesami:loaded', function(){
  //   var formElement = document.querySelector("#form")
  //   var sesamiDateInput = formElement.querySelector("[name='properties[Date]']")
  //   sesamiDateInput.addEventListener('change', function(){
  //     const FD = new FormData( formElement )
  //     // createOrder(FD)
  //     console.log(FD)
  //   })
  // })
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://cdn.sesami.co/shopify.js")
    // addScript("https://fast.wistia.com/assets/external/E-v1.js")
  }
}
