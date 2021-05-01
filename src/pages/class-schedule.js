import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
import { navigate } from "@reach/router"
// import "https://coattend.s3.amazonaws.com/script.min.js?shop=j-philippus-art-studio.myshopify.com"

// const createMarkup = () => {
//   return {__html: 'https://widget.coattend.com/calendar?template=true&shop=j-philippus-art-studio.myshopify.com'};
// }

const ClassSchedule = () => {
  return (
    <Layout>
      <SEO title="Class Schedule" />

      <iframe
        id="coattend-iframe"
        width="100%"
        height="600px"
        onClick={navigate(
          "https://j-philippus-art-studio.myshopify.com/pages/calendar"
        )}
        src="https://widget.coattend.com/calendar?template=true&shop=j-philippus-art-studio.myshopify.com"
        frameBorder="0"
        title="Class Schedule iframe"
        allowFullScreen=""
        style={{ height: "790px" }}
      />

      {/* <div dangerouslySetInnerHTML={createMarkup()} ></div> */}
    </Layout>
  )
}

export default ClassSchedule
