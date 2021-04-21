import React, { useState } from "react"
import axios from "axios"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  useColorModeValue,
} from "@chakra-ui/react"
import DiamondButton from "../DiamondButton/DiamondButton"

const Newsletter = () => {
  // Server State
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  //   Handle Server Response
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  //   Handel Submit
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/aa2a00e7-6704-4a1d-9c29-d5581d340b3d",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  //   Theme:
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  return (
    <form
      action="https://getform.io/f/aa2a00e7-6704-4a1d-9c29-d5581d340b3d"
      method="POST"
      style={{
        position: "relative",
        display: "flex",
        maxWidth: "400px",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <FormControl id="email">
        <FormLabel textAlign="center" color={themeBlue}>
          GET OUR NEWSLETTER
        </FormLabel>
        <Input type="email" name="email" />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
      <DiamondButton type="submit">ENTER</DiamondButton>
    </form>
  )
}

export default Newsletter
