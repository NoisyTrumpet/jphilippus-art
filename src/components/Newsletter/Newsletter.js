import React from "react"
import { Input, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { FooterHeading } from "../Footer/Fragments/FooterHeading.js"
import DiamondButton from "../DiamondButton/DiamondButton"
import Recaptcha from "react-recaptcha"

import "./Newsletter.scss"

const Newsletter = () => {
  //   Theme:
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  return (
    <form
      action="https://getform.io/f/aa2a00e7-6704-4a1d-9c29-d5581d340b3d"
      method="POST"
    >
      <Stack spacing="4" maxWidth={400} mx={`auto`} mt={8} textAlign="center">
        <FooterHeading color={themeBlue}>
          Subscribe to our newsletter
        </FooterHeading>
        <Text fontSize={[`small`, `medium`]}>
          Get notified when we add new products and classes.
        </Text>
        <Stack
          spacing="4"
          direction={{
            // base: "column",
            md: "row",
          }}
          className="footer-newsletter"
          alignItems="center"
        >
          <Input
            bg={useColorModeValue("white", "inherit")}
            placeholder="Enter your email"
            type="email"
            required
            name="email"
            focusBorderColor={useColorModeValue("blue.500", "blue.300")}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue("gray.500", "whiteAlpha.700"),
            }}
          />
          <DiamondButton
            type="submit"
            buttonStyle="btn--primary"
            buttonSize="btn--xs"
            id="footerNewsletterBtn"
            to="submit"
            onClick={() => {}}
            marginTop={4}
          >
            Subscribe
          </DiamondButton>
        </Stack>
        <Recaptcha sitekey={`${process.env.RECATCHA_SITE_KEY}`} />
      </Stack>
    </form>
  )
}

export default Newsletter
