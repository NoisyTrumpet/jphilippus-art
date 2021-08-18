import * as React from "react"
import Layout from "../components/Layout/Layout"
import { navigate } from "gatsby"

import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
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
const PrivatePartyRequest = () => {
  const [startDate, setStartDate] = React.useState(new Date())
  // Check if document is null in case of error
  const isBrowser = typeof window || document !== `undefined`

  React.useEffect(() => {
    isBrowser &&
      document.querySelector("form").addEventListener("submit", handleSubmit)
  })

  const handleSubmit = e => {
    e.preventDefault()
    const myForm = document.getElementById("private-party-form")
    const formData = new FormData(myForm)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        navigate(`/thank-you`)
      })
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
        <Text
          textAlign="center"
          mb={8}
          maxW={700}
          mx={"auto"}
          color="black"
          fontSize={"large"}
        >
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
            // data-netlify-recaptcha="true"
            // netlify-honeypot="bot-field"
          >
            <input type="hidden" name="private-party" value="private-party" />
            <Stack flexDirection="column" spacing={4}>
              <Flex
                alignItems={["left", "center"]}
                direction={["column", "row"]}
              >
                <FormLabel minWidth="fit-content" mb="0">
                  First name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="First name"
                  name="first-name"
                  backgroundColor="white"
                  isRequired
                />
              </Flex>
              <Flex
                alignItems={["left", "center"]}
                direction={["column", "row"]}
              >
                <FormLabel minWidth="fit-content" mb="0">
                  Last name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Last name"
                  name="last-name"
                  backgroundColor="white"
                  isRequired
                />
              </Flex>
              <Flex
                alignItems={["left", "center"]}
                direction={["column", "row"]}
              >
                <FormLabel minWidth="fit-content" mb="0">
                  Email Address
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  backgroundColor="white"
                  isRequired
                />
              </Flex>
              <Flex
                alignItems={["left", "center"]}
                direction={["column", "row"]}
              >
                <FormLabel minWidth="fit-content" mb="0">
                  Phone Number
                </FormLabel>
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  name="phone"
                  backgroundColor="white"
                  isRequired
                />
              </Flex>
              <Flex
                alignItems={["left", "center"]}
                direction={["column", "row"]}
              >
                <FormLabel minWidth="fit-content" mb="0">
                  Type of Class
                </FormLabel>
                <Select type="select" name="Type of Class" isRequired>
                  <option>Charcuterie</option>
                  <option>Resin Pour</option>
                  <option>Glass Art</option>
                </Select>
              </Flex>

              <FormControl>
                <Flex
                  alignItems={["left", "center"]}
                  direction={["column", "row"]}
                >
                  <FormLabel minWidth="fit-content" mb="0">
                    Number of Participants
                  </FormLabel>
                  <Stack w="100%">
                    <NumberInput
                      max={24}
                      min={6}
                      name="Number of People"
                      type="number"
                      isRequired
                    >
                      <NumberInputField />
                      <NumberInputStepper placeholder={8}>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <FormHelperText>Minimum: 6, Maximum: 24</FormHelperText>
                  </Stack>
                </Flex>
              </FormControl>

              <Flex
                alignItems={["left", "center"]}
                direction={["column", "row"]}
              >
                <FormLabel minWidth="fit-content" mb="0">
                  What type of party is this?
                </FormLabel>
                <Select name="Type of Event" type="select" isRequired>
                  <option>Holiday</option>
                  <option>Bridal</option>
                  <option>Birthday</option>
                  <option>Team Building</option>
                  <option>Girls Night Out</option>
                  <option>Other</option>
                </Select>
              </Flex>
              <Flex
                alignItems={["left", "center"]}
                direction={["column", "row"]}
              >
                <FormLabel minWidth="fit-content" mb="0">
                  Date:
                </FormLabel>
                <DatePicker
                  name="date"
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  className="date-picker"
                  placeholderText="Select a date"
                  isRequired
                />
              </Flex>
              <Flex
                alignItems={["left", "center"]}
                direction={["column", "row"]}
              >
                <FormLabel minWidth="fit-content" mb="0">
                  Special Requests/Notes
                </FormLabel>
                <Textarea name="notes" />
              </Flex>

              {/* <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p> */}
              {/* <div data-netlify-recaptcha="true"></div> */}
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
