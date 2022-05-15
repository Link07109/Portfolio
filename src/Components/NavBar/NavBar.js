import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext, themes } from '../../Contexts/ThemeContext'

const NavBar = props => {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className='header-container'>
            <header className='header'>
                <Link to='/'><h2 className='fancy-link'>Home</h2></Link>
                <Link to='/projects'><h3 className='fancy-link'>Projects</h3></Link>
                <Link to='/about'> <h3 className='fancy-link'>About</h3></Link>

                <ThemeContext.Consumer className='center'>
                    {({ changeTheme }) => (
                        <button onClick={() => {
                            setDarkTheme(!darkTheme)
                            changeTheme(darkTheme ? themes.light : themes.dark)
                            document.getElementById("theme-toggle").ariaLabel = darkTheme ? "Turn off the lights" : "Turn on the lights"
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