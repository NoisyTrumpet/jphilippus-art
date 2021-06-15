import React from "react"
import { sliceEvents, createPlugin } from "@fullcalendar/react"

class CustomView extends React.Component {
  render(props) {
    let segs = sliceEvents(props, true) // allDay=true

    return (
      <div>
        <div class="view-title">
          {props.dateProfile.currentRange.start.toUTCString()}
        </div>
        <div class="view-events">{segs.length} events</div>
      </div>
    )
  }
}

export default createPlugin({
  views: {
    custom: CustomView,
  },
})
