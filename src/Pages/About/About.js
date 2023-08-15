import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <>
            <h2>About</h2>

            {/* <button className='link fancy-link'>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5em'}}>
                    <FontAwesomeIcon size='xl' icon={faDownload} />
                    <h3>Resume</h3>
                </div>
            </button> */}

            <p>Game, Web, Mobile, and Robotics Developer</p>
            <p>8 years of programming experience</p>
            <p>UNC Charlotte computer science graduate</p>

            <h2>Contact Me!</h2>
            <div className='footer-div'>
                <FontAwesomeIcon size='xl' icon={faEnvelope} />
                <a className='fancy-link' href='mailto:valadez.sei@gmail.com' target='_blank' rel='noopener noreferrer'>valadez.sei@gmail.com</a>
            </div>
        </>
    )
}

export default memo(About)