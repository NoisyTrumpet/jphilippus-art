/**
 * Write-only the password as cookie
 */
import React, { useState } from "react"
import { setSessionPassword } from "../utils/utils"
import "./password.scss"

const PasswordProtect = () => {
  const [password, setPassword] = useState("")

  const onSubmit = event => {
    event.preventDefault()
    setSessionPassword(password)
    window.location.reload() // eslint-disable-line
  }

  return (
    <div className="password-wrapper">
      <h1 style={{ color: "#fff" }}>Private Party Product</h1>
      <h4 style={{ color: "#fff" }}>Enter Password</h4>

      <form onSubmit={onSubmit} style={{ width: "320px" }}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Enter</button>
      </form>

      {/* <a
         href="https://gitlab.com/mkit/open-source/gatsby-theme-password-protect#readme"
         target="_blank"
         rel="noopener noreferrer"
         style={{
           ...styles.link,
           ...(isThemeHovered ? styles.linkHover : null)
         }}
         onMouseEnter={() => themeHover(true)}
         onMouseLeave={() => themeHover(false)}
       >
         gatsby-theme-password-protect
       </a> */}
      {/* <a
         href="https://mkit.io"
         target="_blank"
         rel="noopener noreferrer"
         style={{
           ...styles.link,
           ...(isSiteHovered ? styles.linkHover : null)
         }}
         onMouseEnter={() => siteHover(true)}
         onMouseLeave={() => siteHover(false)}
       >
         MK IT
       </a> */}
    </div>
  )
}

export default PasswordProtect
