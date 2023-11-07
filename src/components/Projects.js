import React from 'react'
import '../styles/Projects.css'
import { projectList } from "../helpers/ProjectList";
import { Link } from 'react-router-dom';
import { GitHub } from '@mui/icons-material'
import commonCents from '../assets/projectPics/commonCents.png'

function Circle() {
  return (
    <svg width="40" height="40">
      <circle className='GHprojBorder' cx="20" cy="20.3" r="16" strokeWidth='3px' />
    </svg>
  );
}

function Projects({ projectRefs }) {
  return (
    <section className='projects row'>
      <section>
        <h1>Development Experience</h1>
      </section>
      <div className='projectTitleContainer'>
        <div className='projectPicContainer'>
          <img src={commonCents} alt="Featured image of the 'Common Cents' project" className='projectPic' />
        </div>
        <div className='projectContentBlock'>
          <div className='projectTitleBlock'>
            <div className='projectButtons'>
              <Link to="www.google.com" target='_blank' className='GHprojIcon'>
                <GitHub className='githubIcon' />
                <Circle />
              </Link>
              {"www.google.com" ? <button className='projButton' onClick={() => window.open("www.google.com", '_blank')}>DEMO</button> : ""}
              {"www.google.com" ? <button className='projButton' onClick={() => window.open("www.google.com", '_blank')}>LIVE</button> : ""}
            </div>
            <h1>Common Cents</h1>
          </div>
          <div className='projectDescriptionBlock'>
            <p>A personal budgeting app utilizing the 50-30-20 principle - a simple approach to budgeting where 50 percent of your income goes to needs, 30 percent goes to wants, and 20 percent goes to debt and taxes.</p>
          </div>
        </div>
      </div>

      <ul>
        {projectList.map((project, index) => (
          <li key={index} ref={projectRefs[index]}>
            <section className='projectTitle'>
              <p className='strongBlue' style={{ textDecoration: 'none' }}><strong>{project.name}</strong></p>
              <div className='projectButtons'>
                <Link to={project.github} target='_blank' className='GHprojIcon'>
                  <GitHub className='githubIcon' />
                  <Circle />
                </Link>
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