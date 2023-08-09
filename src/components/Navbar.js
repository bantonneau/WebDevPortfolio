import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { LinkedIn, GitHub, Email, Assignment } from '@mui/icons-material'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <a href='/'>antonneau web dev</a>
            </div>
            <div className='linkIcons'>
                <Link to="https://www.linkedin.com/in/benantonn/" target='_blank'>
                    <LinkedIn />
                </Link>
                <Link to='mailto:benantonn@gmail.com' target='_blank'>
                    <Email />
                </Link>
                <Link to='https://github.com/bantonneau' target='_blank'>
                    <GitHub className='githubIcon' />
                </Link>
                <Link to="/resume">
                    <Assignment />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar