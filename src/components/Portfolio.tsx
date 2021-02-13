import React from "react"
import { projects } from "../projects"
import ProjectCard from "./ProjectCard"

// Withholding encapsulation until design finalized

const Portfolio: React.FC = () => {
  return (
    <div className="section portfolio" id="portfolio">
      <h2 style={{ marginBottom: "40px" }}>My Portfolio</h2>
      {projects.map(p => (
        <ProjectCard
          image={p.image}
          name={p.name}
          url={p.url}
          codeUrl={p.codeUrl}
          description={p.description}
        />
      ))}
    </div>
  )
}

export default Portfolio
