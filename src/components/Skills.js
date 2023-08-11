import React from 'react'
import '../styles/Skills.css'

export const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "NoSQL",
    "MongoDB",
    "OAuth",
    "Bcrypt",
    "MERN Stack",
    "Restful APIs",
    "MySQL",
    "Sequelize",
    "Responsive Web Design",
    "Handlebars",
    "Bootstrap",
    "SASS",
    "JQuery",
    "JSON",
    "AJAX",
    "MVC Framework",
    "GraphQL",
    "Agile Development",
    "Git",
    "Heroku",
    "Webpack",
    "TypeScript",
    "NPM",
    "Jest",
  ];
  
  const professionalSkills = [
    "Attention to Detail",
    "Creativity",
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Leadership",
    "Relationship Building",
    "Conflict Resolution",
    "Adaptability",
    "Integrity",
    "Resilience"
];

function Skills() {
    return (
        <section className='skills row'>
            <h1>Technical Skills</h1>
            <ul className='skillsContainer'>
                {technicalSkills.map((skill, index) => (
                    <li className="skillTile" key={index}>
                        {skill}
                    </li>
                ))}
            </ul>
            <h1>Professional Skills</h1>
            <ul className='skillsContainer'>
                {professionalSkills.map((skill, index) => (
                    <li className="skillTile" key={index}>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skills