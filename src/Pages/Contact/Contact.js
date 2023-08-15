import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <>
            <h2>Contact</h2>
            <div className='footer-div'>
                <FontAwesomeIcon size='xl' icon={faEnvelope} />
                <a className='fancy-link' href='mailto:valadez.sei@gmail.com' target='_blank' rel='noopener noreferrer'>valadez.sei@gmail.com</a>
            </div>
        </>
    )
}

export default memo(Contact)