import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <section className='footerInfo'>
        <h1>Ben Antonneau</h1>
        <p>414-731-5209</p>
        <p>benantonn@gmail.com</p>
      </section>
      <section className='footerLinks'>
        <Link>CONTACT</Link>
        <Link>RESUME</Link>
        <Link>LINKEDIN</Link>
        <Link>GITHUB</Link>
      </section>
      <p>&copy; Bennett Antonneau 2023</p>
    </footer>
  )
}

export default Footer