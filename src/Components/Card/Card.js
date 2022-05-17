import React, { memo } from 'react'

const Card = ({ title, description, link }) => {

    return (
        <article className='card center-container'>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{description}</p>
                <a className='fancy-link' href={link} target='_blank' rel='noopener noreferrer'>GitHub</a>
            </div>
        </article>
    )
}

export default memo(Card)