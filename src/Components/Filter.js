import styles from '../Styles/Filter.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export function Filter({ handleFilter, region }) {

    const regionsArray = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    library.add(faChevronDown)

    const [isOpen, setIsOpen] = useState(false);

    const { darkMode } = useContext(ThemeContext);

    function handleDropdownClick(event) {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    function handleSelectClick(event, value) {
        event.preventDefault()
        handleFilter(value);
        setIsOpen(false);
    }


    return (
        <div className={styles.filterArea}>
            <button className={darkMode ? `${styles.filterDropdownButton} ${styles.darkTheme}` : `${styles.filterDropdownButton} ${styles.lightTheme}`} onClick={(e) => handleDropdownClick(e)}>
                {region}
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </button>
            
            {isOpen ? 
                <div className={darkMode ? `${styles.filterSelectArea} ${styles.darkTheme}`: `${styles.filterSelectArea} ${styles.lightTheme}`}>
                    {regionsArray.map(regionElem => {
                        return (
                            <button onClick={(e) => handleSelectClick(e, regionElem)} key={regionElem} className={darkMode ? `${styles.filterSelectButton} ${styles.darkTheme}`: `${styles.filterSelectButton} ${styles.lightTheme}`}>{regionElem}</button>
                        )
                    })}
                </div> : null
            }



        </div>
        
    )
}