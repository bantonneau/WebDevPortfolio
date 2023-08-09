import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { LinkedIn, GitHub } from '@mui/icons-material'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbarLogo'>
                <h1 href='/' className=''>Bennett Antonneau</h1>
            </div>
            <ul className='navLinks'>
                <li>
                    <Link to="https://www.linkedin.com/in/benantonn/" target='_blank' className='navIcon'>
                        <LinkedIn />
                    </Link>
                </li>
                <li>
                    <Link to='https://github.com/bantonneau' target='_blank' className='navIcon'>
                        <GitHub className='githubIcon' />
                    </Link>
                </li>
                <li><Link className='buttonLink'>RESUME</Link></li>
                <li><Link className='buttonLink'>CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar