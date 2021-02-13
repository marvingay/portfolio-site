import React from "react"

interface ProjectCardProps {
  image: string
  name: string
  url: string
  codeUrl?: string
  description: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  url,
  codeUrl,
  description,
}) => {
  return (
    <div className="project">
      <div className="img-ct">
        <img alt={name} className="project-sample" src={image} />
      </div>
      <div className="info-ct">
        <div className="info-title">
          <h3>{name}</h3>
        </div>
        <div className="links-ct">
          <h4 className="url" style={{ marginRight: "20px" }}>
            <a href={`https://${url}`} rel="noopener" target="_blank">
              {url}
            </a>
          </h4>
          {codeUrl && (
            <h4 className="url">
              <a
                href={`https://github.com/marvingay/${codeUrl}`}
                rel="noopener"
              >
                View Code
              </a>
            </h4>
          )}
        </div>
        <div>
          <p className="text">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
