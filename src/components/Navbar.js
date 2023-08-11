import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { LinkedIn, GitHub } from '@mui/icons-material'

function Circle() {
    return (
        <svg width="40" height="40" className='iconBorder'>
            <circle cx="20" cy="20.3" r="16" fill="none" stroke="#00D7D7" strokeWidth="2" />
        </svg>
    );
}

function RoundedSquare() {
    return (
        <svg width="30" height="30" className='iconBorder'>
            <rect x="1" y="1" width="28" height="28" rx="4" ry="4" fill="none" stroke="#00D7D7" strokeWidth="2" />
        </svg>
    );
}


function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbarLogo'>
                <h1 href='/' className=''>Bennett Antonneau</h1>
            </div>
            <ul className='navLinks'>
                <li>
                    <Link to="https://www.linkedin.com/in/benantonn/" target='_blank' className='LInavIcon'>
                        <LinkedIn className='linkedinIcon'/>
                        <RoundedSquare />
                    </Link>
                </li>
                <li>
                    <Link to='https://github.com/bantonneau' target='_blank' className='GHnavIcon'>
                        <GitHub className='githubIcon' />
                        <Circle />
                    </Link>
                </li>
                <li><Link className='buttonFill'>RESUME</Link></li>
                <li><Link className='buttonLink'>CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar