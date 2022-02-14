import styles from '../Styles/BackButton.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export function BackButton({ closeDetail }) {
    library.add(faArrowLeft);
    
    const { darkMode } = useContext(ThemeContext);

    return (
        <button onClick={(e) => closeDetail(e)} className={darkMode? `${styles.button} ${styles.darkTheme}` : `${styles.button} ${styles.lightTheme}`}><FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Back</button>
    )
}