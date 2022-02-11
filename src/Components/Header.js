import styles from '../Styles/Header.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export function Header() {

    library.add(faMoon);
    
    return (
        <header className={styles.header}>
            <h1>Where in the world?</h1>
            <h2><span><FontAwesomeIcon icon="fa-regular fa-moon" /></span>Dark Mode</h2>
        </header>
    )
}