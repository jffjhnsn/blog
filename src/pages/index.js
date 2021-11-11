import * as React from "react"
import cv from "../assets/cv-jeff-johnson.pdf"

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
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 12,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

// data
const links = [
  {
    text: "What I'm doing now",
    url: "/now",
    color: "#E95800",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/jffjhnsn/",
    color: "#1099A8",
  },
  {
    text: "CV",
    url: cv,
    color: "#000000",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Jeff Johnson
        <br />
        <span style={headingAccentStyles}>— software engineer </span>
      </h1>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              {link.description && (
                <p style={descriptionStyle}>{link.description}</p>
              )}
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
