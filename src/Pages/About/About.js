import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    return (
        <>
            <h2 className='p-color'>About</h2>

            <p>Hey! I'm Ivan, a recent college grad interested in game and web development!</p>
            <p>I mostly work with Godot for games and React for web, but I'm familiar with some other technologies used in the field as well!</p>

            <h2 className='p-color'>Contact Me!</h2>
            <div className='footer-div'>
                <FontAwesomeIcon size='xl' icon={faEnvelope} />
                <a className='fancy-link' href='mailto:valadez.sei@gmail.com' target='_blank' rel='noopener noreferrer'>valadez.sei@gmail.com</a>
            </div>
        </>
    )
}

export default memo(About)