import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles/SearchBar.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export function SearchBar({ handleQuery }) {
    library.add(faMagnifyingGlass);

    const { darkMode } = useContext(ThemeContext);






    return (  
        <form className={styles.searchForm} onSubmit={e => e.preventDefault()}>
            <label className={styles.searchLabel}>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                <input className={darkMode ? `${styles.searchInput} ${styles.darkTheme}` : `${styles.searchInput} ${styles.lightTheme}`} type="text" onChange={(e) => handleQuery(e)} placeholder="Search for a country..." />
            </label>
        </form>
    )
}