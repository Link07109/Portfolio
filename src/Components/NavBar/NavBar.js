import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext, themes } from '../../Contexts/ThemeContext'

const NavBar = props => {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className='header-container'>
            <header className='header'>
                <h2 className='fancy-link'>{props.headerText}</h2>
                <h3 className='fancy-link'>Projects</h3>
                <h3 className='fancy-link'>About</h3>
                <h3 className='fancy-link'>Contact</h3>

                <ThemeContext.Consumer className='center'>
                    {({ changeTheme }) => (
                        <button onClick={() => {
                            setDarkTheme(!darkTheme)
                            changeTheme(darkTheme ? themes.light : themes.dark)
                        }}
                        id='theme-toggle' aria-label='Turn off the lights.'>
                            <FontAwesomeIcon size='xl' icon={darkTheme ? faSun : faMoon} inverse={darkTheme}></FontAwesomeIcon>
                        </button>
                    )}
                </ThemeContext.Consumer>
            </header>

            <hr />
        </div>
    )
}

export default NavBar