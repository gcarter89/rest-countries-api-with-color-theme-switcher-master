import styles from '../Styles/SearchFilterContainer.module.scss';
import {SearchBar} from '../Components/SearchBar.js';
import {Filter} from '../Components/Filter.js';

export function SearchFilterContainer(props) {
    return (
        <div className={styles.searchFilterContainer}>
            <SearchBar />
            <Filter handleFilter={props.handleFilter} region={props.region} />
        </div>
        
    )
}