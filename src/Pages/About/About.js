import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

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

            <p>Incoming Senior at UNC Charlotte studying Computer Science</p>
            <p>7 years of programming experience</p>
            <p>Game, Web, Mobile, and Robotics Developer</p>
        </>
    )
}

export default About