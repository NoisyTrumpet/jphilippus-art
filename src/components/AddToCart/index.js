import * as React from "react"
import { Button } from "@chakra-ui/react"
import { StoreContext } from "../../context/storeContext"
import { ChakraHelpersContext } from "../../context/chakra-helpers-context"

const AddToCart = ({ variantId, quantity, available, ...props }) => {
  const { addVariantToCart, loading, onOpen } = React.useContext(StoreContext)
  const { primaryColorScheme } = React.useContext(ChakraHelpersContext)

  return (
    <Button
      colorScheme={primaryColorScheme}
      onClick={() => {
        addVariantToCart(variantId, quantity)
        onOpen()
      }}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Add to Cart" : "Out of Stock"}
    </Button>
  )
}

export default AddToCart
