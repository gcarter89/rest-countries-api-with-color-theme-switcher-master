import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles/SearchBar.module.scss';

export function SearchBar({ handleQuery }) {
    library.add(faMagnifyingGlass);






    return (  
        <form className={styles.searchForm} onSubmit={e => e.preventDefault()}>
            <label className={styles.searchLabel}>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                <input className={styles.searchInput} type="text" onChange={(e) => handleQuery(e)} placeholder="Search for a country..." />
            </label>
        </form>
    )
}