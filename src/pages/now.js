import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headerStyles = {
  color: "#663399",
  textDecoration: "none",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: 24,
  padding: "0 96px",
  fontWeight: 700,

}
const paragraphStyles = {
  marginBottom: 48,
}

const NowPage = () => {
  return (
    <>
      <header>
        <Link to="/" style={headerStyles}>Jeff Johnson</Link>
      </header>
      <main style={pageStyles}>
        <title>Now</title>
        <h1 style={headingStyles}>
          What I'm doing now
        </h1>
        <p style={paragraphStyles}>Making this website</p>
        <span>—</span>
        <p>Updated 27 October 2021 from Potsdam, Germany.</p>
      </main>
    </>
  )
}

export default NowPage