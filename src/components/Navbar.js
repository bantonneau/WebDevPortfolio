import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { LinkedIn, GitHub, Email, Article } from '@mui/icons-material'
import Logo from '../assets/logo.png'
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

function Circle() {
    return (
        <svg width="40" height="40" className={isSafari ? 'iconBorder safari' : 'iconBorder'}>
            <circle cx="20" cy="20.3" r="16" fill="none" stroke="#00D7D7" />
        </svg>
    );
}

function RoundedSquare() {
    return (
        <svg width="30" height="30" className={isSafari ? 'iconBorder safari' : 'iconBorder'}>
            <rect x="1" y="1" width="28" height="28" rx="4" ry="4" fill="none" stroke="#00D7D7" />
        </svg>
    );
}

function EmailOutline() {
    return (
        <svg width="35" height="27" className={isSafari ? 'iconBorder safari' : 'iconBorder'}>
            <rect x="1" y="1" width="31" height="25" rx="4" ry="4" fill="none" stroke="#00D7D7" />
        </svg>
    );
}

function ResumeOutline() {
    return (
        <svg width="30" height="33" className={isSafari ? 'iconBorder safari' : 'iconBorder'}>
            <rect x="1" y="1" width="28" height="28" rx="4" ry="4" fill="none" stroke="#00D7D7" />
        </svg>
    );
}
function Navbar() {
    return (
        <nav className='navbar'>
            <section className='navbarLogo'>
                <img src={Logo} alt="Company Logo" className='navbarImage' />
            </section>
            <ul className='navLinks'>
                <li>
                    <Link to="https://www.linkedin.com/in/benantonn/" target='_blank' className='LInavIcon'>
                        <LinkedIn className='navIcon' />
                        <RoundedSquare />
                    </Link>
                </li>
                <li>
                    <Link to='https://github.com/bantonneau' target='_blank' className='GHnavIcon'>
                        <GitHub className='githubIcon' />
                        <Circle  />
                    </Link>
                </li>
                <section className='navButtons'>
                    <li><Link to='https://drive.google.com/file/d/1MSnyZdE9qB_Fsfta1KM7B_smeTGyaDqL/view?usp=sharing' target='_blank' className='buttonFill'>RESUME</Link></li>
                    <li><Link to='mailto:benantonn@gmail.com' target='_blank' className='buttonLink'>CONTACT</Link></li>
                </section>
                <section className='navButtonsIcons'>
                    <li>
                        <Link to="mailto:benantonn@gmail.com" target='_blank' className='EMAILnavIcon'>
                            <Email className='navIcon' />
                            <EmailOutline />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://drive.google.com/file/d/1MSnyZdE9qB_Fsfta1KM7B_smeTGyaDqL/view?usp=sharing" target='_blank' className='RESnavIcon'>
                            <Article className='navIcon' />
                            <ResumeOutline />
                        </Link>
                    </li>
                </section>
            </ul>
        </nav>
    )
}

export default Navbar