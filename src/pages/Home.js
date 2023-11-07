import React, { useState, useEffect, createRef } from 'react'
import '../styles/Home.css'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { projectList } from "../helpers/ProjectList";
import { Link } from 'react-router-dom';
import Pic from '../assets/PicBlob.png'
import Blob from '../assets/Blob.png'


function Home() {

    const [projectRefs, setProjectRefs] = useState([]);

    useEffect(() => {
        setProjectRefs(prevRefs => Array(projectList.length).fill().map((_, i) => prevRefs[i] || createRef()));
    }, []);

    const scrollToProject = (projectIndex) => {
        projectRefs[projectIndex].current.scrollIntoView({ behavior: 'smooth' });
    }



    return (
        <main>
            <section className='hero row'>
                <div className='heroText'>
                    <p className='heroAccentText'>Hi! My name is</p>
                    <h1>Bennett Antonneau</h1>
                    <p>I'm a Full Stack Developer with a strong understanding of both front-end and back-end technologies. My previous experience in graphic and apparel design gives me a unique set of skills with the Adobe Creative Suite. When I'm not coding you will find me lifting weights, designing clothes, or working on unity games with my friends.</p>
                </div>
                <div className='heroPic'>
                    <img src={Blob} alt="Decorative colorful blob background" className='heroPicBlob' />
                    <img src={Pic} alt="Portrait of Bennett" className='heroPicBen' />
                </div>

            </section>
            <Skills />
            <section className='experience row'>
                <section className='projectsExp'>
                    <h1>Projects</h1>
                    <ul>
                        {projectList.map((project, index) => (
                            <li key={index}>
                                <Link
                                    href="#"
                                    onClick={() => scrollToProject(index)}
                                    className='strongBlue'>
                                    <strong>{project.name}</strong>
                                </Link>
                                <p>{project.technologies}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className='history'>
                    <h1>Education</h1>
                    <ul>
                        <li>
                            <p><strong>University of Wisconsin-Madison - Madison, WI</strong></p>
                            <p>Bachelor of Science</p>
                        </li>
                        <li>
                            <p><strong>University of Minnesota-Twin Cities - Minneapolis, MN</strong></p>
                            <p>Full Stack Development Bootcamp</p>
                        </li>
                    </ul>
                    <h1>Employment History</h1>
                    <ul>
                        <li>
                            <p><strong>Pitch Labs</strong><strong> \ Jun 2023-Present</strong></p>
                            <p>Web Developer</p>
                        </li>
                        <li>
                            <p><strong>Kohl's Corporation</strong><strong> \ March 2022-Present</strong></p>
                            <p>Assistant Designer</p>
                        </li>
                        <li>
                            <p><strong>Colony Brands, Inc.</strong><strong> \ Aug 2021 - Jan 2022</strong></p>
                            <p>Technical Design Intern</p>
                        </li>
                        <li>
                            <p><strong>UW-Madison, DoIT</strong><strong> \ Sep 2019 - May 2021</strong></p>
                            <p>Information Technology Support Specialist</p>
                        </li>
                    </ul>

                </section>
            </section>
            <Projects projectRefs={projectRefs} />
        </main>
    )
}

export default Home