import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import googleCalendarPlugin from "@fullcalendar/google-calendar"
import resourceTimelinePlugin from "@fullcalendar/resource-timeline"

const Calendar = () => {
  const resources = [
    {
      id: "a",
      title: "J. Philippus Art Studio",
    },
  ]
  const handleEventData = event => {
    if (event.title === "Glass Art Class") {
      event.color = "#3FA7B6"
    }
    event.resourceId = "a"

    if (event.title === "Mini Glass Art Class") {
      event.color = "#c09559"
    }

    if (event.title.includes(`Acrylic`)) {
      event.color = "#66a1b8"
    }

    if (event.title.includes("Charcuterie")) {
      event.color = "#889064"
    }

    if (event.title.includes("Fiesta")) {
      event.color = `#d1441d`
    }

    if (event.title.includes("Resin")) {
      event.color = `#ad3c72`
    }

    event.url = `/${event.description}`
  }

  return (
    <FullCalendar
      plugins={[
        dayGridPlugin,
        googleCalendarPlugin,
        timeGridPlugin,
        resourceTimelinePlugin,
      ]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,resourceTimeline",
      }}
      fixedWeekCount={false}
      showNonCurrentDates={false}
      schedulerLicenseKey={"CC-Attribution-NonCommercial-NoDerivatives"}
      googleCalendarApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}
      events={{
        googleCalendarId: `fj22k4ljbk35spcb2v2bc36g24@group.calendar.google.com`,
      }}
      resources={resources}
      eventDataTransform={event => handleEventData(event)}
      hiddenDays={[0]}
      initialView="timeGridWeek"
    />
  )
}

export default Calendar
