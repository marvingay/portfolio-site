import React from "react"
import GitHubIcon from "../images/GitHubIcon.png"
import LinkedInIcon from "../images/LinkedInIcon.png"
import TwitterIcon from "../images/TwitterIcon.png"

const SocialMedia: React.FC = () => {
  return (
    <div className="social">
      <a href="https://www.github.com/marvingay">
        <img className="icon github" src={GitHubIcon} alt="Github" />
      </a>
      <a href="https://www.twitter.com/MarvinJGay">
        <img className="icon twitter" src={TwitterIcon} alt="Twitter" />
      </a>
      <a href="https://www.linkedin.com/in/marvinjgay">
        <img className="icon linkedin" src={LinkedInIcon} alt="LinkedIn" />
      </a>
    </div>
  )
}

export default SocialMedia
