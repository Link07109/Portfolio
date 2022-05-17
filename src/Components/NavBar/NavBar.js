import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext, themes } from '../../Contexts/ThemeContext'

const NavBar = () => {
    const [darkTheme, setDarkTheme] = useState(true)

    return (
        <header className='header'>
            <Link to='/'><h3 className='link fancy-link'>Home</h3></Link>
            <Link to='/projects'><h3 className='link fancy-link'>Projects</h3></Link>
            <Link to='/about'> <h3 className='link fancy-link'>About</h3></Link>
            <Link to='/contact'> <h3 className='link fancy-link'>Contact</h3></Link>

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
        </header>
    )
}

export default NavBar