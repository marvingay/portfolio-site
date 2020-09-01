import React from "react"
import { DevSkill } from "../types"
import { getDevSkillIcon } from "../utils/getDevSkillIcon"

interface SingleSkillProps {
  skill: DevSkill
}

const SingleSkill: React.FC<SingleSkillProps> = ({ skill }) => {
  const icon = getDevSkillIcon(skill)
  return (
    <div className="skill-ct">
      <div className="icon-ct">
        <img alt="TypeScript" className="lang-icon" src={icon} />
      </div>
      <span className="skill-txt">{skill}</span>
    </div>
  )
}

export default SingleSkill
