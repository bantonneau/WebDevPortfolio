import React from 'react'
import '../styles/Home.css'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

function Home() {
    return (
        <main>
            <section className='intro row'>
                <h1>Full Stack Web Developer</h1>
                <p>with a strong understanding of both front-end and back-end technologies combined with experience in graphic and apparel design gives me a unique set of skills including Adobe Creative Suite.</p>
            </section>
            <Skills />
            <section className='experience row'>
                <section className='projects'>
                    <h1>Projects</h1>
                </section>
                <section className='history'>
                    <h1>Education</h1>
                    <h1>Employment History</h1>
                </section>
            </section>
            <Projects />
            <section className='interests row'>
                <h1>Personal Interests</h1>
            </section>
        </main>
    )
}

export default Home