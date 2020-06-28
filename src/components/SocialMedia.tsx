import React from 'react';
import GitHubIcon from '../images/GitHubIcon.png';
import LinkedInIcon from '../images/LinkedInIcon.png';
import TwitterIcon from '../images/TwitterIcon.png';
import InstagramIcon from '../images/InstagramIcon.png';

const SocialMedia: React.FC = () => {
  return (
    <div className="social">
      <a href="https://www.github.com/marvingay"><img className="icon" src={GitHubIcon} alt="Github" /></a>
      <a href="https://www.instagram.com/marvinbth"><img className="icon" src={InstagramIcon} alt="Instagram" /></a>
      <a href="https://www.linkedin.com/in/marvinjgay"><img className="icon" src={LinkedInIcon} alt="LinkedIn" /></a>
      <a href="https://www.twitter.com/MarvinJGay"><img className="icon" src={TwitterIcon} alt="Twitter" /></a>
    </div>

  )
}

export default SocialMedia;