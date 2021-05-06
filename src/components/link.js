import * as React from "react"
import PropTypes from "prop-types"
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
// const Link = props => <ChakraLink {...props} />

const Link = props => {
  // if (props.to && props.to.contains('https'|| 'http')) {
  //   return <a href={props.to}>
  //     {props.children}
  //   </a>
  // }
  // if (props.to === undefined) {
  //   return <ChakraLink {...props} />
  // }

  if (props.type === "submit") {
    return <ChakraLink as="button" {...props} />
  }

  return <ChakraLink {...props} />
}

export default Link

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}
