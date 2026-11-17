import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const changeThemeDark = () => {
        setTheme('dark')
    }
    const changeThemeLight = () => {
        setTheme('light')
    }

    return (
        <div>
            <button onClick={changeThemeDark}>Dark Mode </button>
            <button onClick={changeThemeLight}>Light Mode </button>
        </div>
    )
}

export default Button
