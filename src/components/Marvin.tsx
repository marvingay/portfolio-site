import React from "react"
import SocialMedia from "./SocialMedia"

const Marvin = () => {
  return (
    <div className="marvin">
      <div className="text-container">
        <h1 className="name">Marvin Gay</h1>
        <div>
          <p className="job-title">Software Engineer</p>
          <p className="subtitle">(I love sports analysis too!)</p>
        </div>
      </div>
      <SocialMedia />
    </div>
  )
}

export default Marvin
