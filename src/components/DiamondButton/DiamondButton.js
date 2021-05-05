import * as React from "react"
import PropTypes from "prop-types"
import { Container, Button, Tag } from "@chakra-ui/react"
import { navigate } from "gatsby"

import "./DiamondButton.scss"

const styles = [
  "btn--primary",
  "btn--secondary",
  "btn--tertiary",
  "btn--primary-transparent",
]

const sizes = ["btn--xs", "btn--small", "btn--medium", "btn--large", "btn--xl"]

const DiamondButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to,
  mTop,
}) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0]

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0]

  const Linked = () => {
    if (`${to}`.includes("http")) {
      return (
        <a
          href={to}
          alt={children}
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          style={{ display: `flex` }}
        >
          <Tag
            className="btn-text"
            transform="rotate(-45deg)"
            colorScheme="none"
            p="0"
          >
            {children}
          </Tag>
        </a>
      )
    }
    return (
      <Button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => {
          onClick && onClick()
          to && navigate(to)
        }}
        type={type}
      >
        <Tag
          className="btn-text"
          transform="rotate(-45deg)"
          colorScheme="none"
          p="0"
        >
          {children}
        </Tag>
      </Button>
    )
  }

  return (
    <Container
      className="rotate-45"
      transform="rotate(45deg)"
      marginTop={mTop ? mTop : 0}
    >
      <Linked />
    </Container>
  )
}

DiamondButton.propTypes = {
  to: PropTypes.string,
}

export default DiamondButton
