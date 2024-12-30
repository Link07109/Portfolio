import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <div className='footer-container'>
            <hr />

            <footer className='footer'>
                <div className='footer-div'>
                    <FontAwesomeIcon size='xl' icon={faGithub} />
                    <a className='fancy-link' href='https://github.com/Link07109' target='_blank' rel='noopener noreferrer'>GitHub</a>
                </div>
                <div className='footer-div'>
                    <FontAwesomeIcon size='xl' icon={faItchIo} />
                    <a className='fancy-link' href='https://rir1nku.itch.io' target='_blank' rel='noopener noreferrer'>ItchIo</a>
                </div>
                <div className='footer-div'>
                    <FontAwesomeIcon size='xl' icon={faLinkedin} />
                    <a className='fancy-link' href='https://linkedin.com/in/valadez-sei' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                </div>
            </footer>
        </div>
    )
}

export default memo(Footer);