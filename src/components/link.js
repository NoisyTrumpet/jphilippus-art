import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { chakra, Text } from "@chakra-ui/react"

const ChakraLink = chakra(GatsbyLink, {
  baseStyle: {
    transition: `all .3s ease-in-out`,
    cursor: `pointer`,
    textDecoration: `none`,
    outline: `none`,
    _hover: {
      textDecoration: `underline`, color: `#C09559`,
    },
    _focus: {
      boxShadow: `outline`,
    },
    _activeLink: {
      color: `#C09559`,
    },
    _active: {
      color: `secondary`,
    },
  },
})

/**
 * ChakraLink with gatsby-link (no external links)
 */
const Link = props => {
  if (
    props.to === "https://j-philippus-art-studio.myshopify.com/pages/calendar"
  ) {
    return (
      <chakra.a
        href={props.to}
        rel={`noopener noreferrer`}
        target={`_blank`}
        alt="Class Schedule"
        className={props.className}
        style={{ textTransform: `uppercase` }}
        {...props}
        _activeLink={{ color: `#C09559`, fontWeight: `600` }}
        _hover={{ color: `#C09559` }}
        _focus={{ color: `#C09559` }}
      >
        <Text>{props.children}</Text>
      </chakra.a>
    )
  }

  if (props.to === "/products/gift-card/gift-card/") {
    return <ChakraLink {...props} _activeLink={{ color: `white`, backgroundColor: `#79C1CC` }} />
  }
  return <chakra.a href={props.to} {...props} _activeLink={{ color: "blue" }} />
}

export default Link
