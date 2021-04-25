import * as React from "react"
import { useColorMode, Button, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const sunColor = useColorModeValue(`secondary`)
  const isLight = colorMode === "light"

  return (
    <Button
      onClick={toggleColorMode}
      size="sm"
      variant="outline"
      aria-label={
        isLight ? `Activate dark color mode` : `Activate light color mode`
      }
    >
      {isLight ? <MoonIcon color={sunColor} /> : <SunIcon />}
    </Button>
  )
}

export default ThemeToggle
