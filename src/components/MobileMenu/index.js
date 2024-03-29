import * as React from "react"
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { FiMenu } from "react-icons/fi"
import Navigation from "../Navigation/index"

const MobileMenu = ({ quantity, btnRef, onOpen }) => {
  const {
    isOpen: isOpenMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu,
  } = useDisclosure()
  const menuRef = React.useRef()
  const linkColor = useColorModeValue(`headingColor`, `dark.headingColor`)

  return (
    <>
      <Drawer
        isOpen={isOpenMenu}
        placement="right"
        onClose={onCloseMenu}
        finalFocusRef={menuRef}
        size="full"
        marginLeft="auto"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack
                as="nav"
                direction="column"
                fontSize="lg"
                alignItems="center"
                sx={{
                  "a.active": {
                    fontWeight: `medium`,
                    color: linkColor,
                  },
                }}
              >
                {/* <CartButton
                  quantity={quantity}
                  onOpen={onOpen}
                  btnRef={btnRef}
                /> */}
                <Navigation />
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <IconButton
        className="hamburger"
        onClick={onOpenMenu}
        ref={menuRef}
        px={3}
        sx={{ background: "transparent", color: "#707070" }}
        size="lg"
        aria-label={isOpenMenu ? `Close menu` : `Open menu`}
        icon={<FiMenu />}
        marginLeft="auto"
        display={[`flex`, `flex`, `flex`, `flex`, `none`]}
      />
    </>
  )
}

export default MobileMenu
