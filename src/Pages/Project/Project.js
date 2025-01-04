import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'

const Project = () => {
    const { state } = useLocation()

    return (
        <>
            <div style={{paddingTop: '2em'}}></div>
            {!state.data.web_playable && <img src={state.data.image} width='640' height='360' />}
            {state.data.web_playable &&
                <iframe frameBorder="0" src="https://itch.io/embed-upload/12384401?color=5d8acf" allowFullscreen="" width="640" height="360"><a href="https://rir1nku.itch.io/tower-of-ascension">Play Tower of Ascension on itch.io</a></iframe>
            }

            <h2 className='p-color'>{state.data.title} ({state.data.year})</h2>
            {!state.data.priv && <a href={state.data.github}
                target='_blank'
                rel='noopener noreferrer'>
                <h3 className='link'><FontAwesomeIcon size='xl' icon={faGithub} /></h3>
            </a>}
            {state.data.itch_io && <a href={state.data.itch_io}
                target='_blank'
                rel='noopener noreferrer'>
                <h3 className='link'><FontAwesomeIcon size='xl' icon={faItchIo} /></h3>
            </a>}

            <div className='project-grid'>
                <p>{state.data.description_short}</p>
                <p>{state.data.description_long}</p>
                <p>Built with: {state.data.tech_stack}</p>
            </div>

            <div className='project'>
                {state.data.gif != state.data.image && state.data.gif && <img src={state.data.gif} width='640' height='360' />}

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
