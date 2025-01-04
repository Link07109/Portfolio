import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons'
import { ThemeContext, themes } from '../../Contexts/ThemeContext'

const NavBar = () => {
    const [darkTheme, setDarkTheme] = useState(true)
    const navigate = useNavigate()

    return (
        <header className='header'>
            <button className='nav-button' onClick={() => navigate('/')}>
                <h1 className='p-color'>Ivan Valadez</h1>
            </button>
            <ThemeContext.Consumer className='center'>
                {({ changeTheme }) => (
                    <button onClick={() => {
                        setDarkTheme(!darkTheme)
                        changeTheme(darkTheme ? themes.light : themes.dark)
                        document.querySelector('#theme-toggle').ariaLabel = darkTheme ? 'Turn off the lights' : 'Turn on the lights'
                    }}
                    id='theme-toggle' aria-label='Turn on the lights.'>
                        <FontAwesomeIcon size='xl' icon={darkTheme ? faSun : faMoon} inverse={darkTheme}></FontAwesomeIcon>
                    </button>
                )}
            </ThemeContext.Consumer>

                <a href='https://github.com/Link07109' target='_blank' rel='noopener noreferrer'>
                    <h3 className='link'><FontAwesomeIcon size='xl' icon={faGithub} /></h3>
                </a>
                <a href='https://rir1nku.itch.io' target='_blank' rel='noopener noreferrer'>
                    <h3 className='link'><FontAwesomeIcon size='xl' icon={faItchIo} /></h3>
                </a>
                <a href='https://linkedin.com/in/valadez-sei' target='_blank' rel='noopener noreferrer'>
                    <h3 className='link'><FontAwesomeIcon size='xl' icon={faLinkedin} /></h3>
                </a>
                <a href='mailto:valadez.sei@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <h3 className='link'><FontAwesomeIcon size='xl' icon={faEnvelope} /></h3>
                </a>
        </header>
    )
}

export default NavBar
