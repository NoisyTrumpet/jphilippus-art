import { Container } from "@chakra-ui/layout"
import React from "react"
import Layout from "../components/Layout/Layout"

const Calendar = () => {
  return (
    <Layout>
      <Container>
        <iframe
          title="J. Philippus Art Studio & Gallery Calendar"
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%233492a1&amp;ctz=America%2FChicago&amp;src=ZmoyMms0bGpiazM1c3BjYjJ2MmJjMzZnMjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;mode=WEEK&amp;showTz=0&amp;showCalendars=0&amp;showTabs=1&amp;showPrint=1&amp;showDate=1&amp;showNav=1&amp;showTitle=1"
          style={{ borderWidth: "0" }}
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </Container>
    </Layout>
  )
}

export default Calendar
