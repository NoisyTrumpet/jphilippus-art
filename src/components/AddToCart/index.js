import * as React from "react"
import { StoreContext } from "../../context/storeContext"
import DiamondButton from "../DiamondButton/DiamondButton"

const AddToCart = ({ variantId, quantity, available, ...props }) => {
  const { addVariantToCart, loading, onOpen } = React.useContext(StoreContext)

  return (
    <DiamondButton
      to="submit"
      onClick={() => {
        addVariantToCart(variantId, quantity)
        onOpen()
      }}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Add to Cart" : "Out of Stock"}
    </DiamondButton>
  )
}

export default AddToCart
