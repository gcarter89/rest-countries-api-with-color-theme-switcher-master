import { forwardRef, useContext } from 'react'
import styles from '../Styles/CountriesListCard.module.scss';
import { ThemeContext } from '../App';

export const CountriesListCard = forwardRef(({country, handleSelectedCountry}, ref) => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div onClick={(e) => handleSelectedCountry(e, country)} ref={ref} className={darkMode ? `${styles.card} ${styles.darkTheme}` : `${styles.card} ${styles.lightTheme}` }>
            <div className={styles.imageContainer}>
                <img src={country.flags.png} alt={`Flag of ${country.name}`}/>
            </div>
            <div className={styles.copyContainer}>
                <h3>{country.name.common}</h3>
                <p><b>Population: </b>{country.population.toLocaleString()}</p>
                <p><b>Region: </b>{country.region}</p>
                <p><b>Capital: </b>{
                    !country.capital ? 'N/A' : 
                    country.capital.map((capital, index) => {
                        if (index === country.capital.length - 1 ) {
                            return <span key={index}>{capital}</span>
                        } else {
                            return (<span key={index}>{capital}, </span>)
                        }
                    })
                }
                </p>
            </div>
        </div>
    )
})