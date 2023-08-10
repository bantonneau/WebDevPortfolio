import React from 'react'
import '../styles/Skills.css'

export const technicalSkills = [
    "HTML",
    "CSS",
    "Responsive Web Design",
    "React",
    "Handlebars",
    "Tailwind",
    "Bootstrap",
    "SASS",
    "JQuery",
    "JavaScript",
    "JSON",
    "AJAX",
    "Node.js",
    "Express.js",
    "MySQL",
    "Sequelize",
    "Restful APIs",
    "MVC Framework",
    "MongoDB",
    "NoSQL",
    "GraphQL",
    "MERN Stack",
    "OAuth",
    "Git",
    "Heroku",
    "Webpack",
    "TypeScript",
    "NPM",
    "Jest",
    "Agile Development"
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