import React from 'react'
import '../styles/Skills.css'

export const technicalSkills = [
    "HTML/CSS",
    "JavaScript/JQuery",
    "Responsive Web Design",
    "React",
    "Node.js",
    "Express.js",
    "MySQL",
    "Sequelize",
    "NoSQL",
    "MongoDB",
    "User Authentication",
    "Session Storage",
    "OAuth",
    "Bcrypt",
    "Restful APIs",
    "JSON",
    "AJAX",
    "GraphQL",
    "Handlebars",
    "Bootstrap",
    "SASS",
    "MVC Framework",
    "Agile Development",
    "Git",
    "Heroku",
    "Shell Scripting",
    "Unit Testing",
    "Linting",
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