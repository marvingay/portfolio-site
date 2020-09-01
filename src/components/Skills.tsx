import React from "react"
import SingleSkill from "./SingleSkill"

const Skills = () => (
  <div className="section skills">
    <h2 id="skills">Skills</h2>
    <div className="skills-container">
      <div className="lang-container">
        <h3 className="skill-title">Languages</h3>
        <div className="skill-item">
          <SingleSkill skill="TypeScript" />
          <SingleSkill skill="JavaScript" />
          <SingleSkill skill="C++" />
        </div>
      </div>
      <div className="lang-container">
        <h3 className="skill-title">Front-end</h3>
        <div className="skill-item">
          <SingleSkill skill="HTML" />
          <SingleSkill skill="CSS" />
          <SingleSkill skill="SASS" />
          <SingleSkill skill="React" />
        </div>
      </div>
      <div className="lang-container">
        <h3 className="skill-title">Back-end</h3>
        <div className="skill-item">
          <SingleSkill skill="NodeJS" />
          <SingleSkill skill="GraphQL" />
          <SingleSkill skill="MongoDB" />
          <SingleSkill skill="PostgreSQL" />
        </div>
      </div>
      <div className="lang-container">
        <h3 className="skill-title">DevOps</h3>
        <div className="skill-item">
          <SingleSkill skill="Docker" />
          <SingleSkill skill="Linux" />
        </div>
      </div>
    </div>
  </div>
)

export default Skills
