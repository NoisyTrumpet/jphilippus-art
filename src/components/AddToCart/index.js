import * as React from "react"
import { StoreContext } from "../../context/storeContext"
import { Button } from "@chakra-ui/react"

const AddToCart = ({
  properties,
  variantId,
  quantity,
  available,
  ...props
}) => {
  const { addVariantToCart, loading, onOpen } = React.useContext(StoreContext)
  // Add another button variant

  return (
    <Button
      onClick={() => {
        available && addVariantToCart(variantId, quantity, properties)
        available && onOpen()
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
