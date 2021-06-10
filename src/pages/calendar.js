import { Container } from "@chakra-ui/layout"
import React from "react"
import Layout from "../components/Layout/Layout"
import loadable from "@loadable/component"

const ClassCalendar = loadable(() => import("../components/Calendar"))

const Calendar = () => {
  return (
    <Layout>
      <Container>
        <ClassCalendar />
      </Container>
    </Layout>
  )
}

export default Calendar
