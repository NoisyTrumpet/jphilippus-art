import * as React from "react"
import PropTypes from "prop-types"
import { Button, Container, Tag } from "@chakra-ui/react"
import Link from "../link"

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
  rotate,
  tight,
  disabled,
}) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0]

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0]

  const Linked = () => {
    if (to === "submit") {
      return (
        <Button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          display="flex"
          type={type}
          onClick={onClick}
          disabled={disabled}
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
    if (to.includes("http") || to.includes("https")) {
      return (
        <a
          href={to}
          alt={children}
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          style={{ display: `grid`, placeItems: `center` }}
        >
          <Tag
            className="btn-text"
            transform="rotate(-45deg)"
            colorScheme="none"
            // p={buttonSize === "btn--xl" ? 4 : 2}
          >
            {children}
          </Tag>
        </a>
      )
    }
    if (to.includes("tel")) {
      return (
        <a
          href={to}
          alt={children}
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          style={{ display: `grid`, placeItems: `center` }}
        >
          <Tag
            className="btn-text"
            transform="rotate(-45deg)"
            colorScheme="none"
            // p={buttonSize === "btn--xl" ? 4 : 2}
          >
            {children}
          </Tag>
        </a>
      )
    }

    return (
      <Link
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        to={to}
        onClick={onClick}
        type={type}
        display="grid"
        placeItems="center"
        alt={children}
      >
        <Tag
          className="btn-text"
          transform="rotate(-45deg)"
          colorScheme="none"
          p="0"
        >
          {children}
        </Tag>
      </Link>
    )
  }

  return (
    <Container
      className="rotate-45"
      transform={rotate ? `rotate(0deg)` : `rotate(45deg)`}
      marginTop={mTop ? mTop : 0}
      p={tight && 0}
    >
      <Linked />
    </Container>
  )
}

DiamondButton.propTypes = {
  to: PropTypes.string,
  tight: PropTypes.bool,
}

export default DiamondButton
