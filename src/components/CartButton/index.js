import * as React from "react"
import { Badge, IconButton, Stack, Button } from "@chakra-ui/react"
import { FiShoppingCart } from "react-icons/fi"
import { ChakraHelpersContext } from "../../context/chakra-helpers-context"

import { DiamondButton } from "../DiamondButton"

import "./CartButton.scss"

const CartButton = ({ quantity, btnRef, onOpen }) => {
  // const { primaryColorScheme } = React.useContext(ChakraHelpersContext)

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={3}
    >
      <Button className="navigation-link navigation-cart" onClick={onOpen}>
        Cart
        <IconButton
          aria-label={`Shopping Cart with ${quantity} items`}
          icon={<FiShoppingCart />}
          variant="ghost"
          ref={btnRef}
          onClick={onOpen}
          className="cart-btn cart-link"
        />
        {""}
        <Badge
          className="nav-cart-badge"
          height="24px"
          width="24px"
          borderRadius="full"
          p={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {quantity}
        </Badge>
      </Button>
    </Stack>
  )
}

export default CartButton
