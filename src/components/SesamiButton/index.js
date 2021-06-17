import React from "react"

const SesamiButton = ({ storeId, variantId, legacyId, text }) => {
  return (
    <div
      id="sesami__buttonWrapper"
      data-sesami-product-id={legacyId}
      data-sesami-shop-id={storeId}
      data-sesami-variant-id={variantId}
      data-sesami-button-label={text}
    ></div>
  )
}

export default SesamiButton
