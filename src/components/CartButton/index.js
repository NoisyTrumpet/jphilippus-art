import * as React from "react"
import { Badge, IconButton, Stack, Container } from "@chakra-ui/react"
import Cart from "../../svg/cart"

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
      <Container display="flex" alignItems="center">
        <IconButton
          aria-label={`Shopping Cart with ${quantity} items`}
          icon={<Cart />}
          variant="ghost"
          size="lg"
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
          paddingTop={1}
          display="grid"
          placeItems="center"
        >
          {quantity}
        </Badge>
      </Container>
    </Stack>
  )
}

export default CartButton
