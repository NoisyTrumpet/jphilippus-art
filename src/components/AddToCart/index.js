import * as React from "react"
import { StoreContext } from "../../context/storeContext"
import DiamondButton from "../DiamondButton/DiamondButton"
import { Button } from "@chakra-ui/react"

const AddToCart = ({
  properties,
  variantId,
  quantity,
  available,
  ...props
}) => {
  const { addVariantToCart, loading, onOpen } = React.useContext(StoreContext)

  return (
    <Button
      onClick={() => {
        addVariantToCart(variantId, quantity, properties)
        onOpen()
      }}
      color="white"
      textTransform="uppercase"
      fontWeight="normal"
      bg="primary"
      disabled={!available || loading}
      {...props}
    >
      {available ? "Add to Cart" : "Out of Stock"}
    </Button>
  )
}

export default AddToCart
