import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import googleCalendarPlugin from "@fullcalendar/google-calendar"

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}
      events={{
        googleCalendarId: `fj22k4ljbk35spcb2v2bc36g24@group.calendar.google.com`,
      }}
      hiddenDays={[0]}
      initialView="dayGridMonth"
    />
  )
}

export default Calendar
