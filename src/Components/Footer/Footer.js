import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = props => {
    return (
        <div className='footer-container'>
            <hr />

            <footer className='footer'>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5em"}}>
                    <FontAwesomeIcon size='xl' icon={faGithub} />
                    <a href="https://github.com/Link07109" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5em"}}>
                    <FontAwesomeIcon size='xl' icon={faLinkedin} />
                    <a href="https://linkedin.com/in/valadez-sei" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;