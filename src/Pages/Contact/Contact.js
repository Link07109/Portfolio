import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <>
            <h2>Contact</h2>
            <div className='footer-div'>
                <FontAwesomeIcon size='xl' icon={faPhone} />
                <p target='_blank' rel='noopener noreferrer'>(919) 935-8196</p>
            </div>
            <div className='footer-div'>
                <FontAwesomeIcon size='xl' icon={faEnvelope} />
                <a className='fancy-link' href='https://valadez.sei@gmail.com' target='_blank' rel='noopener noreferrer'>valadez.sei@gmail.com</a>
            </div>
        </>
    )
}

export default Contact