import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Open Sans, -apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#1F5673",
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
  color: "#21A179",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: "none",
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
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/jffjhnsn/",
    color: "#1099A8",
  },
  {
    text: "Github",
    url: "https://github.com/jffjhnsn",
    color: "#E95800",
  },
  {
    text: "CV",
    url: "https://drive.google.com/file/d/1C2_R2ogDG9DFk06PvRQ39_rRTmcqLazN/view?usp=sharing",
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
      <p>
        I'm a recent graduate (as in, this November!) from the <a style={linkStyle} href="https://hpi.de/" target="_blank" rel="noreferrer">Hasso Plattner 
        Institute</a> and I have significant experience in TypeScript 
        and web development.
      </p>
      <p>
        For the past year, I built new tools for <a style={linkStyle} href="https://kyub.com/" target="_blank" rel="noreferrer">
          kyub
        </a>, a 3D editor for building physical prototypes for laser cutting. In 
        benchmark tests with the most popular laser-cut models on the internet, 
        we were able to recreate <strong>9.6x</strong> as many models using kyub compared to before. 
        We took this further and have built several laser-cut guitars, and are 
        using kyub to explore the design space of guitars.
      </p>
      <p>
        I've also been working as a software engineer at <a style={linkStyle} href="https://borderfree.tech/" target="_blank" rel="noreferrer">
          borderfree.tech
        </a>, an early-stage startup focused on payments and ecommerce. 
        There, I've been helping build <a style={linkStyle} href="https://revovideo.com" target="_blank" rel="noreferrer">Revo Video</a>, a live-streaming interactive commerce 
        platform in React. <a style={linkStyle} href="https://www.loom.com/share/041fe4cb9b4948fcbe37407e60d81b6c" target="_blank" rel="noreferrer">
          Here's a demo</a> of what we've achieved so far.
      </p>
      <p>
        Originally from Portland, Oregon, I moved to Berlin in 2017.
      </p>
      <br />
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
