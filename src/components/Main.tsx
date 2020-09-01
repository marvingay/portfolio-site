import React from "react"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
import About from "./About"
import Contact from "./Contact"

const Main: React.FC = () => {
  return (
    <main>
      <Portfolio />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}

export default Main
