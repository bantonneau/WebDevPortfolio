import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { LinkedIn, GitHub} from '@mui/icons-material'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <a href='/'>Bennett Antonneau</a>
            </div>
            <div className='linkIcons'>
                <Link to="https://www.linkedin.com/in/benantonn/" target='_blank'>
                    <LinkedIn />
                </Link>
                <Link to='https://github.com/bantonneau' target='_blank'>
                    <GitHub className='githubIcon' />
                </Link>
                <a>Resume</a>
                <a>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar