import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Card = ({ title, description, link, priv }) => {

    return (
        <article className='card center-container'>
            <div>
                <h3>{title}</h3>
            </div>
            
            <p>{description}</p>
            <div>
                {priv && <div className='footer-div red'>
                    <FontAwesomeIcon size='xl' icon={faGithub} />
                    <p>Source Private</p> 
                </div>}

                {!priv && <>
                    <FontAwesomeIcon size='xl' icon={faGithub} />
                    <a style={{marginLeft: '0.5em'}}
                        className='fancy-link'
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Source
                    </a>
                </>}
            </div>
        </article>
    )
}

export default memo(Card)