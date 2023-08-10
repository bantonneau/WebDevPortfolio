import React, { useRef } from 'react'
import '../styles/Home.css'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { projectList } from "../helpers/ProjectList";
import { Link } from 'react-router-dom';


function Home() {
    const projectsRef = useRef(null);

    const scrollToProjects = (e) => {
        e.preventDefault();
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <main>
            <section className='intro row'>
                <h1>Full Stack Web Developer</h1>
                <p>Hi there, I'm Ben! I'm a Full Stack Developer with a strong understanding of both front-end and back-end technologies. My previous experience in graphic and apparel design gives me a unique set of skills with the Adobe Creative Suite. When I'm not building websites you will find me lifting weights, designing clothes, or working on unity games with my friends.</p>
            </section>
            <Skills />
            <section className='experience row'>
                <section className='projectsExp'>
                    <h1>Projects</h1>
                    <ul>
                        {projectList.map((project, index) => (
                            <li key={index}>
                                <Link href="#" onClick={scrollToProjects} className='strongBlue'><strong>{project.name}</strong></Link>
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
                            <p>Retailing & Consumer Behavior - Bachelor of Science</p>
                        </li>
                        <li>
                            <p><strong>University of Minnesota-Twin Cities - Minneapolis, MN</strong></p>
                            <p>Full Stack Bootcamp - Portfolio: AntonneauWebDev.com</p>
                        </li>
                    </ul>
                    <h1>Employment History</h1>
                    <ul>
                        <li>
                            <p><strong className='strongBlue'>Kohl's Corporation</strong><strong> \ March 2022-Present</strong></p>
                            <p>Assistant Designer</p>
                        </li>
                        <li>
                            <p><strong className='strongBlue'>Colony Brands, Inc.</strong><strong> \ Aug 2021 - Jan 2022</strong></p>
                            <p>Technical Design Intern</p>
                        </li>
                        <li>
                            <p><strong className='strongBlue'>UW-Madison, DoIT</strong><strong> \ Sep 2019 - May 2021</strong></p>
                            <p>Information Technology Support Specialist</p>
                        </li>
                    </ul>

                </section>
            </section>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <section className='interests row'>
                <h1>Personal Interests</h1>
            </section>
        </main>
    )
}

export default Home