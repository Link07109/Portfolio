import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'

const Card = ({ data }) => {
    const navigate = useNavigate()

    return (
        <article className='card center-container' onClick={() => navigate('/project', {state: {data}})}>
            <div className='card-image'>
                <img src={data.gif} />
                <img src={data.image} className='image' />
            </div>

            <div className='card-footer'>
                <h3 className='link fancy-link'>{data.title} ({data.year})</h3>

                {!data.priv && <a onClick={(e) => e.stopPropagation()}
                    href={data.github}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <h3 className='link'><FontAwesomeIcon size='xl' icon={faGithub} /></h3>
                </a>}
                {data.itch_io && <a onClick={(e) => e.stopPropagation()}
                    href={data.itch_io}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <h3 className='link'><FontAwesomeIcon size='xl' icon={faItchIo} /></h3>
                </a>}
            </div>

            <div style={{paddingBottom: '1em'}}>{data.description_short}</div>
        </article>
    )
}

export default memo(Card)
