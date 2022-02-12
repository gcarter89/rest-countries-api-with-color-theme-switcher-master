import styles from '../Styles/CountryDetail.module.scss';
import { BackButton } from './BackButton';


export function CountryDetail() {
    return (
        <div className={styles.detail}>
            <BackButton />
            <div className={styles.detailsCard}>
                <div className={styles.imageContainer}>
                    <div className={styles.imagePlaceholder}></div>
                    <div className={styles.detailCopy}>
                        <h3>United States of America</h3>
                    </div>
                </div>

            </div>



        </div>
    )
}