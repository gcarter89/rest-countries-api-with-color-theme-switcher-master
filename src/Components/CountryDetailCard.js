import { BackButton } from './BackButton';
import styles from '../Styles/CountryDetailCard.module.scss';

export function CountryDetailCard({ country, closeDetail, borderCountries, handleSelectedBorder }) {

    return (
        <div className={styles.detailContainer}>
            <BackButton closeDetail={closeDetail} />
            <div className={styles.detailsCard}>
                <div className={styles.imageContainer}>
                     <img src={country[0].flags.png} alt={`flag of ${country[0].name}`} />
                </div>
                <div className={styles.detailCopy}>
                    <h3>{country[0].name}</h3>
                    <section className={styles.detailTop}>
                        <p><b>Native Name: </b>{country[0].nativeName}</p>
                        <p><b>Population: </b>{country[0].population.toLocaleString()}</p>
                        <p><b>Region: </b>{country[0].region}</p>
                        <p><b>Sub Region: </b>{country[0].subregion}</p>
                        <p><b>Capital: </b>{country[0].capital}</p>
                    </section>
                    <section className={styles.detailMiddle}>
                        <p><b>Top Level Domain: </b>{country[0].topLevelDomain}</p>
                        <p><b>Currencies: </b>
                            {country[0].currencies.map((currency, index) => {
                                if (index === country[0].currencies.length - 1) {
                                    return <span key={index}>{currency.name}</span>
                                } else {
                                    return <span key={index}>{currency.name}, </span>
                                }
                            })}
                        </p>
                        <p><b>Languages: </b>
                            {country[0].languages.map((language, index) => {
                                if (index === country[0].languages.length - 1) {
                                    return <span key={index}>{language.name}</span>
                                } else {
                                    return <span key={index}>{language.name}, </span>
                                }
                            })}
                        </p> 
                    </section>

                    <section className={styles.detailBottom}>
                        <h4 className={styles.borderCountriesTitle}>Border Countries:</h4>
                        <div className={styles.borderCountriesContainer}>
                            {  
                                !borderCountries ? <button className={styles.borderCountryButton}>No borders</button> : 
                                    borderCountries.map(country => {
                                        return (
                                            <button onClick={(e) => handleSelectedBorder(e, country)} key={country.name.common} className={styles.borderCountryButton}>{country.name.common}</button>
                                        )
                                    })
                            }
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}