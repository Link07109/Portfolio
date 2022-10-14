import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Card = ({ title, description, link, priv }) => {

    return (
        <article className='card center-container'>
            <h3>{title}</h3>
            
            <p>{description}</p>

            {priv && <div className='footer-div red'>
                <FontAwesomeIcon size='xl' icon={faGithub} />
                <a className='red disabled'>Source Private</a>
            </div>}

            {!priv && <div className='footer-div'>
                <FontAwesomeIcon size='xl' icon={faGithub} />
                <a className='fancy-link'
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'>
                    Source
                </a>
            </div>}
            
        </article>
    )
}

export default memo(Card)