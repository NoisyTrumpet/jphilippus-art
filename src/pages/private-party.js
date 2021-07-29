import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"

import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
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
  Textarea,
} from "@chakra-ui/react"
import Seo from "../components/SEO"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

// Component with a form to request a new private party
const PrivatePartyRequest = ({}) => {
  const [startDate, setStartDate] = React.useState(new Date())
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
        <Text textAlign="center" mb={8} maxW={700} mx={"auto"}>
          Looking to celebrate a special occasion with your friends, family or
          even coworkers? We are happy to accommodate your event with a
          customizable Private Party. Whether it's Ladies Night, a birthday
          celebration, or even a team building event - just fill out the
          information below, and let us do the rest.
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
                <FormLabel minWidth="fit-content" mb="0">
                  First name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="First name"
                  name="first-name"
                  backgroundColor="white"
                />
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content" mb="0">
                  Last name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Last name"
                  name="last-name"
                  backgroundColor="white"
                />
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content" mb="0">
                  Email Address
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  backgroundColor="white"
                />
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content" mb="0">
                  Phone Number
                </FormLabel>
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  name="phone"
                  backgroundColor="white"
                />
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content" mb="0">
                  Type of Class
                </FormLabel>
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
                  <FormLabel minWidth="fit-content" mb="0">
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
                <FormLabel minWidth="fit-content" mb="0">
                  Type of Event
                </FormLabel>
                <Select>
                  <option>Birthday</option>
                  <option>Team Building</option>
                  <option>Girls Night Out</option>
                  <option>Other</option>
                </Select>
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content" mb="0">
                  Date:
                </FormLabel>
                <DatePicker
                  name="date"
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                />
              </Flex>
              <Flex alignItems="center">
                <FormLabel minWidth="fit-content" mb="0">
                  Special Requests/Notes
                </FormLabel>
                <Textarea name="notes" />
              </Flex>
              <Button
                type="submit"
                bg="primary"
                color="white"
                fontWeight="regular"
                textTransform="uppercase"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </Layout>
  )
}

export default PrivatePartyRequest
