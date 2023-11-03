import React from 'react'
import '../styles/Skills.css'


function Skills() {
    return (
        <section className='skills row'>
            <div className='skillsLanguages skillsTile'>
                <h2>Languages</h2>
                <p>Java, HTML/CSS, Javascript, Typescript, SQL</p>
            </div>
            <div className='skillsFrameworks skillsTile'>
                <h2>Frameworks and Libraries</h2>
                <p>Spring, React, Node.js, Express.js, Mongoose, Next.js, Sequelize, Tailwind</p>
            </div>
            <div className='skillsTools skillsTile'>
                <h2>Tools, Platforms, and Concepts</h2>
                <p>Git, Docker, Kubernetes, RESTful APIs, Web Accessibility Standards, Azure, Agile Development, Yarn, Npm, Maven, Web Responsive Design, Vitest, Jira</p>
            </div>
        </section>
    )
}

export default Skills