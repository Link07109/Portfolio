import React, { useState, useEffect } from 'react'
import { themes, ThemeContext } from './ThemeContext'

const ThemeContextWrapper = props => {
    const [theme, setTheme] = useState(themes.light)

    const changeTheme = theme => {
        setTheme(theme)
    }

    useEffect(() => {
        switch (theme) {
            case themes.dark:
                document.body.classList.add('dark-theme')
                document.body.classList.remove('light-theme')
                break
            case themes.light:
            default:
                document.body.classList.add('light-theme')
                document.body.classList.remove('dark-theme')
                break
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextWrapper