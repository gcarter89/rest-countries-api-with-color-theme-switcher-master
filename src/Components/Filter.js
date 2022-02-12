import styles from '../Styles/Filter.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

export function Filter({ handleFilter, region }) {

    const regionsArray = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    library.add(faChevronDown)

    const [isOpen, setIsOpen] = useState(false);

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
            <button className={styles.filterDropdownButton} onClick={(e) => handleDropdownClick(e)}>
                {region}
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </button>
            
            {isOpen ? 
                <div className={styles.filterSelectArea}>
                    {regionsArray.map(regionElem => {
                        return (
                            <button onClick={(e) => handleSelectClick(e, regionElem)} key={regionElem} className={styles.filterSelectButton}>{regionElem}</button>
                        )
                    })}
                </div> : null
            }



        </div>
        
    )
}