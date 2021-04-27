import { ButtonGroup, IconButton } from "@chakra-ui/react"
import * as React from "react"
import { FaFacebook } from "react-icons/fa"

const SocialMediaLinks = props => (
  <ButtonGroup variant="ghost" color="#3FA7B6" {...props}>
    <IconButton
      as="a"
      href="https://www.facebook.com/JPhilippusArtStudio"
      aria-label="Facebook"
      icon={<FaFacebook fontSize="20px" />}
    />
    {/* <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    /> */}
  </ButtonGroup>
)

export default SocialMediaLinks
