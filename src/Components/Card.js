import { forwardRef } from 'react'
import styles from '../Styles/Card.module.scss'


export const Card = forwardRef(({country}, ref) => {
    return (
        <div ref={ref} className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={country.flags.png} alt={`Flag of ${country.name}`}/>
            </div>
            <div className={styles.copyContainer}>
                <h3>{country.name.common}</h3>
                <p><b>Population: </b>{country.population}</p>
                <p><b>Region: </b>{country.region}</p>
                <p><b>Capital: </b>{country.capital}</p>
            </div>
        </div>
    )
})