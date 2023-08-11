import React from 'react'
import '../styles/Projects.css'
import { projectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <section className='projects row'>
      <section>
        <h1>Web Development experience</h1>
      </section>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <section className='projectTitle'>
            <p className='strongBlue' style={{ textDecoration: 'none' }}><strong>{project.name}</strong></p>
            <div className='projectButtons'>
              {project.github ? <button className='button' onClick={() => window.open(project.github, '_blank')}>GitHub</button> : ""}
              {project.demo ? <button className='button' onClick={() => window.open(project.demo, '_blank')}>Demo</button> : ""}
              {project.live ? <button className='button' onClick={() => window.open(project.live, '_blank')}>Live</button> : ""}
            </div>
            </section>
            {project.features.map((skill, index) => (
              <ul key={index}>
                <li> {skill} </li>
              </ul>
            ))}
            <p><strong>Technologies: {project.technologies}</strong></p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects