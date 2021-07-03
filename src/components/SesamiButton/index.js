import React from "react"
import useScript from "../../utils/useScript"

const SesamiButton = ({ storeId, variantId, legacyId, text }) => {
  useScript(
    `https://cdn.sesami.co/shopify.js?shop=j-philippus-art-studio.myshopify.com`
  )
  if (storeId && variantId && legacyId && text) {
    return (
      <div
        id="sesami__buttonWrapper"
        data-sesami-product-id={legacyId}
        data-sesami-shop-id={storeId}
        data-sesami-variant-id={variantId}
        data-sesami-button-label={text}
        style={{
          textAlign: "center",
          paddingTop: "12px",
        }}
      ></div>
    )
  }
}

export default SesamiButton
