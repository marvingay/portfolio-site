import React from "react"
import Experience from "./Experience"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
import About from "./About"
import Contact from "./Contact"

const Main: React.FC = () => {
  return (
    <main>
      <Experience />
      <Portfolio />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}

export default Main
