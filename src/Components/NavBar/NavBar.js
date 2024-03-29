import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext, themes } from '../../Contexts/ThemeContext'

const NavBar = () => {
    const [darkTheme, setDarkTheme] = useState(false)
    const navigate = useNavigate()

    return (
        <header className='header'>
            <button className='nav-button' onClick={() => navigate('/')}>
                <h2 className='p-color link fancy-link'>Home</h2>
            </button>
            <button className='nav-button' onClick={() => navigate('/about')}>
                <h2 className='p-color link fancy-link'>About</h2>
            </button>
            
            <ThemeContext.Consumer className='center'>
                {({ changeTheme }) => (
                    <button onClick={() => {
                        setDarkTheme(!darkTheme)
                        changeTheme(darkTheme ? themes.light : themes.dark)
                        document.querySelector('#theme-toggle').ariaLabel = darkTheme ? 'Turn off the lights' : 'Turn on the lights'
                    }}
                    id='theme-toggle' aria-label='Turn off the lights.'>
                        <FontAwesomeIcon size='xl' icon={darkTheme ? faSun : faMoon} inverse={darkTheme}></FontAwesomeIcon>
                    </button>
                )}
            </ThemeContext.Consumer>
        </header>
    )
}

export default NavBar