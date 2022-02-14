import styles from '../Styles/Header.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import { ThemeContext } from '../App';

export function Header() {

    library.add([faMoon, faSun]);
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    console.log(darkMode);

    function handleDarkMode(event) {
        event.preventDefault();
        setDarkMode(!darkMode);
    }
    
    return (
        <header className={darkMode ? `${styles.header} ${styles.headerDark}` : `${styles.header} ${styles.headerLight}`}>
            <h1>Where in the world?</h1>
            {
                darkMode ?
                    <button className={styles.toggleButton} onClick={(e) => handleDarkMode(e)}><h2><span><FontAwesomeIcon id={'poop'} icon="fa-solid fa-sun" /></span>Light Mode</h2></button> :
                    <button className={styles.toggleButton} onClick={(e) => handleDarkMode(e)}><h2><span><FontAwesomeIcon icon="fa-regular fa-moon" /></span>Dark Mode</h2></button>
            }


            
        </header>
    )
}