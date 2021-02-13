import React from "react"
import { jobs } from "../jobs";

const Experience: React.FC = () => {

  return (
    <div className="section">
      <h2 id="experience">Work Experience</h2>
      { jobs.map(job => {
        return (
          <div className="project">
            <div className="img-ct">
              <a href={`https://${job.url}`}>
                <img 
                  alt={job.name} 
                  className="project-sample" 
                  style={{ 
                  maxHeight: '100%',
                  minHeight: '192px',
                  }} src={job.image} />
              </a>
            </div>
            <div className="info-ct">
              <div className="job-ct">
                <h3 className="info-title reset">{job.title}</h3>
                <div>
                  <h4 className="reset">{job.name}</h4> {' '}
                  <p className="reset">{job.duration}</p>
                </div>
              </div>
              <p className="text job-desc">{job.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Experience;