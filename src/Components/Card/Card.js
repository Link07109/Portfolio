import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Card = ({ title, year, description, link, priv, image='https://cdn.discordapp.com/attachments/831304128033587270/1135333595498684446/tokyo.png', gif }) => {

    return (
        <article className='card center-container'>
            <div className='card-image'>
                <img src={gif} className='gif' />
                <img src={image} className='image' />
                {/* onMouseOver={e => (e.currentTarget.src = gif)}
                onMouseOut={e => (e.currentTarget.src = image)} */}
                
                <div className='card-image-text'>{description}</div>
            </div>
            {/* <p>{description}</p> */}

            <div className='card-footer'>
                <a href={link}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <h3 className='link fancy-link'>{title}</h3>
                </a>
                {!priv && <FontAwesomeIcon size='xl' icon={faGithub} />}
            </div>
        </article>
    )
}

export default memo(Card)