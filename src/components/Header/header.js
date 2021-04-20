import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import {
  Box,
  Container,
  useColorModeValue,
  useColorMode,
  useMediaQuery,
  Flex,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react"
import { StoreContext } from "../../context/storeContext"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../link"
import Spacer from "../Spacer/index"
import Cart from "../Cart/index"
import Navigation from "../Navigation/index"
import MobileMenu from "../MobileMenu/index"
import CartButton from "../CartButton/index"
import DiamondButton from "../DiamondButton/DiamondButton"

// const Header = ({ siteTitle }) => {
//   const { isOpen, onClose, onOpen, checkout } = React.useContext(StoreContext)
//   const [isSmallerThan768] = useMediaQuery("(max-width: 768px)")
//   const bg = useColorModeValue(`bg`, `dark.bg`)
//   const { colorMode } = useColorMode()
//   const logoColor = useColorModeValue(`primary`, `dark.primary`)
//   const linkColor = useColorModeValue(`headingColor`, `dark.headingColor`)
//   const btnRef = React.useRef()

//   const items = checkout ? checkout.lineItems : []

//   const quantity = items.reduce((total, item) => {
//     return total + item.quantity
//   }, 0)

//   const { DarkLogo, LightLogo } = useStaticQuery(
//     graphql`
//       query {
//         DarkLogo: file(relativePath: { eq: "logo-horizontal-dark.png" }) {
//           childImageSharp {
//             gatsbyImageData(
//               width: 200
//               quality: 90
//               placeholder: BLURRED
//               formats: [AUTO, WEBP, AVIF]
//             )
//           }
//         }
//         LightLogo: file(relativePath: { eq: "logo-horizontal.png" }) {
//           childImageSharp {
//             gatsbyImageData(
//               width: 200
//               quality: 90
//               placeholder: BLURRED
//               formats: [AUTO, WEBP, AVIF]
//             )
//           }
//         }
//       }
//     `
//   )
//   const dark = getImage(DarkLogo)
//   const light = getImage(LightLogo)

//   return (
//     <>
//       <Cart isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
//       <Box
//         w="100%"
//         margin={0}
//         as="header"
//         position="fixed"
//         zIndex="docked"
//         // height="navigationHeight"
//         display="flex"
//         alignItems="center"
//         bg={bg}
//         // sx={{ svg: { height: `24px`, width: `auto` } }}
//       >

//         <Container
//           className="mobile-header"
//           display="flex"
//           width="100%"
//           justifyContent={["space-between", "space-evenly"]}
//           height="fit-content"
//         >
//           <Link
//             to="/"
//             display="flex"
//             alignItems="center"
//             justifySelf="flex-start"
//             color={linkColor}
//             _hover={{
//               textDecoration: `none`,
//               color: logoColor,
//             }}
//           >
//             {colorMode === "dark" ? (
//               <GatsbyImage
//                 image={dark}
//                 style={{ margin: "10px 5px" }}
//                 alt={siteTitle}
//                 className="header-logo-dark"
//               />
//             ) : (
//               <GatsbyImage
//                 image={light}
//                 style={{ margin: "10px 5px" }}
//                 alt={siteTitle}
//                 className="header-logo-reg"
//               />
//             )}
//           </Link>
//           <Container className="right-nav" display="flex" width="min-content">
//             {isSmallerThan768 ? (
//               <MobileMenu
//                 quantity={quantity}
//                 btnRef={btnRef}
//                 onOpen={onOpen}
//                 className="mobile-nav"
//               />
//             ) : (
//               <>
//                 <Navigation className="navigation" />
//                 <CartButton
//                   quantity={quantity}
//                   onOpen={onOpen}
//                   btnRef={btnRef}
//                 />
//               </>
//             )}
//           </Container>
//         </Container>
//       </Box>
//       <Spacer size="navigationHeight" axis="vertical" />
//     </>
//   )
// }

const NavBar = (props, { siteTitle }) => {
  const { isOpen, onClose, onOpen, checkout } = React.useContext(StoreContext)

  const [isNowOpen, setIsNowOpen] = React.useState(false)
  const toggle = () => setIsNowOpen(!isNowOpen)
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)")
  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  const { DarkLogo, LightLogo } = useStaticQuery(
    graphql`
      query {
        DarkLogo: file(relativePath: { eq: "logo-horizontal-dark.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              quality: 90
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        LightLogo: file(relativePath: { eq: "logo-horizontal.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              quality: 90
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const { colorMode } = useColorMode()
  const logoColor = useColorModeValue(`primary`, `dark.primary`)
  const dark = getImage(DarkLogo)
  const light = getImage(LightLogo)

  return (
    <NavBarContainer {...props}>
      {colorMode === "dark" ? (
        <Link to="/" alt="Home">
          <GatsbyImage
            image={dark}
            style={{ margin: "10px 5px" }}
            alt={siteTitle}
            className="header-logo-dark"
          />
        </Link>
      ) : (
        <Link to="/" alt="Home">
          <GatsbyImage
            image={light}
            style={{ margin: "10px 5px" }}
            alt={siteTitle}
            className="header-logo-reg"
          />
        </Link>
      )}
      <MenuLinks isNowOpen={isNowOpen} />
    </NavBarContainer>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
)

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  const { colorMode } = useColorMode()
  const linkColor = useColorModeValue(`headingColor`, `dark.headingColor`)
  return (
    <Link href={to} color={linkColor}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isNowOpen }) => {
  const linkColor = useColorModeValue(`headingColor`, `dark.headingColor`)
  const { isOpen, onClose, onOpen, checkout } = React.useContext(StoreContext)
  const btnRef = React.useRef()

  const items = checkout ? checkout.lineItems : []
  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  const navigationLinks = [
    {
      name: "About the Artist",
      slug: "/about",
      pActive: false,
    },
    {
      name: "Shop",
      slug: "/products",
      pActive: true,
    },
    {
      name: "Class Schedule",
      slug: "/class-schedule",
      pActive: true,
    },
    {
      name: "Contact",
      slug: "/contact",
      pActive: true,
    },
    {
      name: "FAQ",
      slug: "/faq",
      pActive: true,
    },
  ]
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {navigationLinks.map(n => (
          <MenuItem to={n.slug} key={n.slug} className="navigation-link">
            {n.name}
          </MenuItem>
        ))}
        <DiamondButton buttonStyle="btn--secondary" buttonSize="btn--small">
          Gift Cards
        </DiamondButton>
        <CartButton quantity={quantity} onOpen={onOpen} btnRef={btnRef} />
      </Stack>
    </Box>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      my={4}
      px={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
