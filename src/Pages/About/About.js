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

            <p>Hey! I'm Ivan, a recent college grad interested in game and web development!</p>
            <p>I mostly work with Godot for games and React for web, but I'm familiar with some other technologies used in the field as well!</p>

            <h2>Contact Me!</h2>
            <div className='footer-div'>
                <FontAwesomeIcon size='xl' icon={faEnvelope} />
                <a className='fancy-link' href='mailto:valadez.sei@gmail.com' target='_blank' rel='noopener noreferrer'>valadez.sei@gmail.com</a>
            </div>
        </>
    )
}

export default memo(About)