import React from 'react'

const Card = props => {

    return (
        <article className="card center-container">
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <p>{props.description}</p>
                <a href={props.link} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </article>
    )
}

export default Card