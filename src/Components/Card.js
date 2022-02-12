import styles from '../Styles/Card.module.scss'

export function Card({country}) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={country.flags.png} alt={`Flag of ${country.name}`}/>
            </div>
            <div className={styles.copyContainer}>
                <h3>{country.name}</h3>
                <p><b>Population: </b>{country.population}</p>
                <p><b>Region: </b>{country.region}</p>
                <p><b>Capital: </b>{country.capital}</p>
            </div>
        </div>
    )
}