import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Card = ({ priv=false, data }) => {
    const navigate = useNavigate()

    return (
        <article className='card center-container'>            
            <div className='card-image'>
                <img src={data.gif} />
                <img src={data.image} className='image' />                
            </div>

            <div className='card-footer'>
                <button className='nav-button' onClick={() => navigate('/project', {state: {data}})}>
                    <h3 className='link fancy-link'>{data.title} ({data.year})</h3>
                </button>

                {!priv && <a href={data.github}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <h3 className='link'><FontAwesomeIcon size='xl' icon={faGithub} /></h3>
                </a>}
            </div>

            <div style={{paddingBottom: '1em'}}>{data.description_short}</div>
        </article>
    )
}

export default memo(Card)