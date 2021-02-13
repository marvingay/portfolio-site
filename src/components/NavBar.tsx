import React from "react"

const NavBar: React.FC = () => {
  return (
    <nav className="nav">
      <a id="nav-experience" href="#experience">
        Experience
      </a>
      <a id="nav-portfolio" href="#portfolio">
        Portfolio
      </a>
      <a id="nav-skills" href="#skills">
        Skills
      </a>
      <a id="nav-about" href="#about">
        About Me
      </a>
      <a id="nav-contact" href="#contact">
        Contact
      </a>
    </nav>
  )
}

export default NavBar
