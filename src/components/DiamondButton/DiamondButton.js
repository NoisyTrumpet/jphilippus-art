import * as React from "react"
import { Container, Button, Tag } from "@chakra-ui/react"

import "./DiamondButton.scss"

const styles = [
  "btn--primary",
  "btn--secondary",
  "btn--tertiary",
  "btn--primary-transparent",
]

const sizes = [
  "btn--xs", 
  "btn--small", 
  "btn--medium", 
  "btn--large", 
  "btn--xl",
]

const DiamondButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0]

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0]

  return (
    <Container className="rotate-45" transform="rotate(45deg)">
      <Button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
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
    </Container>
  )
}

export default DiamondButton
