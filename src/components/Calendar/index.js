import React from "react"
import { useMediaQuery } from "@chakra-ui/react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import googleCalendarPlugin from "@fullcalendar/google-calendar"
import resourceTimelinePlugin from "@fullcalendar/resource-timeline"
import { stripHtml } from "string-strip-html"

const Calendar = () => {
  // const resources = [
  //   {
  //     id: "a",
  //     title: "J. Philippus Art Studio",
  //   },
  // ]

  const businessHours = [
    {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [1, 2, 3, 4], // Monday - Thursday

      startTime: "11:00", // a start time (10am in this example)
      endTime: "18:00", // an end time (6pm in this example)
    },
    {
      daysOfWeek: [5],
      startTime: "11:00",
      endTime: "17:00",
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

    if (event.description) {
      event.url = `/${stripHtml(event.description).result}`
    }
  }

  const [isMobile] = useMediaQuery("(max-width: 600px)")

  if (isMobile) {
    return (
      <FullCalendar
        plugins={[
          dayGridPlugin,
          googleCalendarPlugin,
          timeGridPlugin,
          resourceTimelinePlugin,
        ]}
        selectConstraint={businessHours}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        footerToolbar={{
          right: "today",
        }}
        slotMinTime={"9:00:00"}
        slotMaxTime={"19:00:00"}
        businessHours={businessHours}
        height={"auto"}
        fixedWeekCount={false}
        showNonCurrentDates={false}
        schedulerLicenseKey={"CC-Attribution-NonCommercial-NoDerivatives"}
        googleCalendarApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}
        events={{
          googleCalendarId: `fj22k4ljbk35spcb2v2bc36g24@group.calendar.google.com`,
        }}
        nowIndicator={true}
        // resources={resources}
        eventDataTransform={event => handleEventData(event)}
        hiddenDays={[0]}
        initialView="dayGrid"
      />
    )
  } else {
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
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        slotMinTime={"9:00:00"}
        slotMaxTime={"19:00:00"}
        businessHours={businessHours}
        nowIndicator={true}
        fixedWeekCount={false}
        showNonCurrentDates={false}
        schedulerLicenseKey={"CC-Attribution-NonCommercial-NoDerivatives"}
        googleCalendarApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}
        events={{
          googleCalendarId: `fj22k4ljbk35spcb2v2bc36g24@group.calendar.google.com`,
        }}
        height="auto"
        // resources={resources}
        eventDataTransform={event => handleEventData(event)}
        hiddenDays={[0]}
        initialView="timeGridWeek"
      />
    )
  }
}

export default Calendar
