import React from "react"
import DropoutBear from "../images/808s.png"

const About = () => (
  <div className="section about">
    <h2 className="heading" id="about">
      About Me
    </h2>
    <div className="project">
      <img
        alt="Marvin's Dropout Bear"
        className="about-img"
        src={DropoutBear}
      />
      <p className="about-me">
        <p>
          Hi, I’m Marvin (if you didn't know)! I love music, sports, poker, and
          coding!
        </p>
        When im not working, you can most likely find me listening to spotify
        while watching basketball and playing a game of chess on my phone. Being
        an only child turned me into a computer nerd at a young age, and through
        that knowledge, programming has become another passion and hobby of
        mine.
      </p>
    </div>
  </div>
)

export default About
