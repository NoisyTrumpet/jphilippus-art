import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { chakra } from "@chakra-ui/react"

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
      <a
        href={props.to}
        rel={`noopener noreferrer`}
        target={`_blank`}
        alt="Class Schedule"
        style={{ textTransform: `uppercase` }}
        className={props.className}
        style={props.style}
      >
        {props.children}
      </a>
    )
  }
  return <ChakraLink {...props} />
}

export default Link
