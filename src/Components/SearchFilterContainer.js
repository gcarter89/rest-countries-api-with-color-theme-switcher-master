import styles from '../Styles/SearchFilterContainer.module.scss';
import {SearchBar} from '../Components/SearchBar.js';
import {Filter} from '../Components/Filter.js';

export function SearchFilterContainer({handleFilter, handleQuery, region}) {
    return (
        <div className={styles.searchFilterContainer}>
            <SearchBar handleQuery={handleQuery} />
            <Filter handleFilter={handleFilter} region={region} />
        </div>
        
    )
}