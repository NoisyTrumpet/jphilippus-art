import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"

import {
  Box,
  Grid,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Center,
  Container,
  useColorModeValue as mode,
  Flex,
  Stack,
  Button,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import Seo from "../components/SEO"

// Component with a form to request a new private party
const PrivatePartyRequest = ({}) => {
  // Check if document is null in case of error
  const isBrowser = typeof window || document !== `undefined`

  React.useEffect(() => {
    isBrowser &&
      document.querySelector("form").addEventListener("submit", handleSubmit)
  })

  const handleSubmit = e => {
    e.preventDefault()
    let myForm = document.getElementById("private-party-form")
    let formData = new FormData(myForm)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch(error => alert(error))
  }
  return (
    <Layout>
      <Seo title="Private Party Booking Form" />
      <Container>
        <Text
          mb={2}
          textAlign="center"
          color="primary"
          fontWeight="bold"
          fontSize={["lg", "xl", "3xl"]}
        >
          Private Party Booking Form
        </Text>
        <Text textAlign="center" mb={8}>
          Brief explanation about form and options
        </Text>
        <Box>
          <form
            id="private-party-form"
            name="private-party"
            method="POST"
            data-netlify="true"
            action="/thank-you"
          >
            <input type="hidden" name="private-party" value="private-party" />
            <Stack flexDirection="column" spacing={4}>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content">First name</FormLabel>
                <Input
                  type="text"
                  placeholder="First name"
                  name="first-name"
                  backgroundColor="white"
                />
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content">Last name</FormLabel>
                <Input
                  type="text"
                  placeholder="Last name"
                  name="last-name"
                  backgroundColor="white"
                />
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content">Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  backgroundColor="white"
                />
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content">Phone Number</FormLabel>
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  name="phone"
                  backgroundColor="white"
                />
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content">Type of Class</FormLabel>
                <Select>
                  <option>Charcuterie</option>
                  <option>Acrylic Pour</option>
                  <option>Resin Pour</option>
                  <option>Geode Resin</option>
                  <option>Glass Art</option>
                </Select>
              </Flex>
              <Flex alignItems="center">
                <FormControl>
                  <FormLabel minWidth="fit-content">
                    Number of Participants
                  </FormLabel>
                  <NumberInput max={24} min={6}>
                    <NumberInputField />
                    <NumberInputStepper placeholder={8}>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <FormHelperText>Minimum: 6, Maximum: 24</FormHelperText>
                </FormControl>
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content">Type of Event</FormLabel>
                <Select>
                  <option>Birthday</option>
                  <option>Batchelorette Party</option>
                  <option>etc.</option>
                </Select>
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content">Down Payment</FormLabel>
                <Select>
                  <option>Yes</option>
                  <option>No</option>
                </Select>
              </Flex>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </Layout>
  )
}

export default PrivatePartyRequest
