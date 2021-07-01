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
      textDecoration: `underline`,
    },
    _focus: {
      boxShadow: `outline`,
    },
    _activeLink: {
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
      >
        <Text>{props.children}</Text>
      </chakra.a>
    )
  }

  if (props.to === "/products/gift-card/gift-card/") {
    return <ChakraLink {...props} _activeLink={{ color: `white` }} />
  }
  return <chakra.a href={props.to} {...props} />
}

export default Link
