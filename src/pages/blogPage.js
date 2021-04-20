import React from "react"
import Layout from "../components/Layout/Layout"

const BlogPage = data => {
  const { body_html, title } = data.pageContext.data
  return (
    <Layout>
      <section className="blog-page">
        <h1>{title}</h1>
        <p>{body_html}</p>
      </section>
    </Layout>
  )
}

export default BlogPage
