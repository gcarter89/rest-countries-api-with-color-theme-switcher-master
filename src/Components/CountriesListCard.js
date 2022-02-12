import { forwardRef } from 'react'
import styles from '../Styles/CountriesListCard.module.scss'


export const CountriesListCard = forwardRef(({country}, ref) => {
    return (
        <div ref={ref} className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={country.flags.png} alt={`Flag of ${country.name}`}/>
            </div>
            <div className={styles.copyContainer}>
                <h3>{country.name.common}</h3>
                <p><b>Population: </b>{country.population.toLocaleString()}</p>
                <p><b>Region: </b>{country.region}</p>
                <p><b>Capital: </b>{country.capital.length === 0 ? 'N/A' : country.capital}</p>
            </div>
        </div>
    )
})