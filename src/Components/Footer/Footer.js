import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = props => {

    return (
        <div className='footer-container'>
            <hr />

            <footer className='footer'>
                <div className='footer-div'>
                    <FontAwesomeIcon size='xl' icon={faGithub} />
                    <a href="https://github.com/Link07109" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className='footer-div'>
                    <FontAwesomeIcon size='xl' icon={faLinkedin} />
                    <a href="https://linkedin.com/in/valadez-sei" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;