import React from 'react'
import '../styles/Projects.css'
import { projectList } from "../helpers/ProjectList";
import { Link } from 'react-router-dom';
import { GitHub } from '@mui/icons-material'

function Circle() {
  return (
      <svg width="40" height="40">
          <circle cx="20" cy="20.3" r="16" fill="#231F20"/>
      </svg>
  );
}

function Projects({ projectRefs }) {
  return (
    <section className='projects row'>
      <section>
        <h1>Web Development experience</h1>
      </section>
      <ul>
        {projectList.map((project, index) => (
          <li key={index} ref={projectRefs[index]}>
            <section className='projectTitle'>
              <p className='strongBlue' style={{ textDecoration: 'none' }}><strong>{project.name}</strong></p>
              <div className='projectButtons'>
                {project.github ?
                  <Link to='https://github.com/bantonneau' target='_blank' className='GHprojIcon'>
                    <GitHub className='githubIcon' />
                    <Circle />
                  </Link>
                  : ""
                }
                {project.demo ? <button className='projButton' onClick={() => window.open(project.demo, '_blank')}>DEMO</button> : ""}
                {project.live ? <button className='projButton' onClick={() => window.open(project.live, '_blank')}>LIVE</button> : ""}
              </div>
            </section>
            {project.features.map((skill, index) => (
              <ul key={index} className='projectBullets'>
                <li> &#x2022; &nbsp; &nbsp; &nbsp;{skill} </li>
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