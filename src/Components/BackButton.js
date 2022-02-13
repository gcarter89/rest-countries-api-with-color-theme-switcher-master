import styles from '../Styles/BackButton.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export function BackButton({ closeDetail }) {
    library.add(faArrowLeft);
    

    return (
        <button onClick={(e) => closeDetail(e)} className={styles.button}><FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Back</button>
    )
}