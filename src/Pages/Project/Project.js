import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Project = () => {
    const { state } = useLocation()

    return (
        <>
            <div style={{paddingTop: '2em'}}></div>
            <img src={state.data.image} width='640' height='360' />

            <h2 className='p-color'>{state.data.title} ({state.data.year})</h2>
            {!state.data.priv && <a href={state.data.github}
                target='_blank'
                rel='noopener noreferrer'>
                <h3 className='link'><FontAwesomeIcon size='xl' icon={faGithub} /></h3>
            </a>}
            
            <div className='project-grid'>
                <p>{state.data.description_short}</p>
                <p>{state.data.description_long}</p>
                <p>Tech stack used: {state.data.tech_stack}</p>
            </div>
            
            <div className='project'>
                {state.data.gif != state.data.image && <img src={state.data.gif} width='640' height='360' />}

                {state.data.video && <iframe width='640' height='360'
                    src={state.data.video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>}
            </div>
        </>
    )
}

export default memo(Project)