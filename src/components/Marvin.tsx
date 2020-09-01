import React from "react"
import SocialMedia from "./SocialMedia"

const Marvin = () => {
  return (
    <div className="marvin">
      <div className="text-container">
        <h1 className="name">Marvin Gay</h1>
        <p className="job-title">
          Software Engineer
          <p className="subtitle">(I play poker too!)</p>
        </p>
      </div>
      <SocialMedia />
    </div>
  )
}

export default Marvin
