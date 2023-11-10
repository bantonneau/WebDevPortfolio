import React from 'react'
import '../styles/Skills.css'


function Skills() {
    return (
        <section className='skills row'>
            <div className='skillsLanguages skillsTile'>
                <h2>Languages</h2>
                <p><div>Java</div> <div>Javascript</div> <div>SQL</div> <div>HTML/CSS</div></p>
            </div>
            <div className='skillsFrameworks skillsTile'>
                <h2>Frameworks</h2>
                <p><div>Spring</div> <div>React.js/Next.js</div> <div>Node.js</div> <div>Express.js</div></p>
            </div>
            <div className='skillsTools skillsTile'>
                <h2>Tools</h2>
                <p><div>Git/GitHub</div> <div>Npm</div> <div>Docker</div> <div>Kubernetes</div> <div>Jira</div></p>
            </div>
        </section>
    )
}

export default Skills