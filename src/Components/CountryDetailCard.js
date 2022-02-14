import { BackButton } from './BackButton';
import styles from '../Styles/CountryDetailCard.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export function CountryDetailCard({ country, closeDetail, borderCountries, handleSelectedBorder }) {
    console.log(country);
    let currencyArray = []
    let languageArray = []
    let nativeNameArray = [];

    for (let key in country[0].currencies) {
        currencyArray.push(country[0].currencies[key].name)
    }

    for (let key in country[0].languages) {
        languageArray.push(country[0].languages[key]);
    }

    for (let key in country[0].name.nativeName) {
        nativeNameArray.push(country[0].name.nativeName[key])
    }

    const { darkMode } = useContext(ThemeContext);



    return (
        <div className={styles.detailContainer}>
            <BackButton closeDetail={closeDetail} />
            <div className={styles.detailsCard}>
                <div className={styles.imageContainer}>
                     <img src={country[0].flags.svg} alt={`flag of ${country[0].name}`} />
                </div>
                <div className={styles.detailCopy}>
                    <h3>{country[0].name.common}</h3>
                    <section className={styles.detailTop}>
                        <p><b>Native Name: </b>{nativeNameArray.length === 0 ? 'N/A' : nativeNameArray[0].common}</p>
                        <p><b>Population: </b>{country[0].population.toLocaleString()}</p>
                        <p><b>Region: </b>{!country[0].region ? 'N/A' : country[0].region}</p>
                        <p><b>Sub Region: </b>{!country[0].subregion ? 'N/A' : country[0].subregion}</p>
                        <p><b>Capital: </b>{!country[0].capital ? 'N/A' : country[0].capital}</p>
                    </section>
                    <section className={styles.detailMiddle}>
                        <p><b>Top Level Domain: </b>{!country[0].tld ? 'No TLD' : country[0].tld[0]}</p>
                        <p><b>Currencies: </b>
                            {
                                currencyArray.length === 0 ? <span>No specified currency</span>:
                                currencyArray.map((currency, index) => {
                                    if (index === currencyArray.length - 1) {
                                        return <span key={index}>{currency}</span>
                                    } else {
                                        return <span key={index}>{currency}, </span>
                                    }
                                })
                            }
                        </p>
                        <p><b>Languages: </b>
                            {
                                languageArray.length === 0 ? <span>No specified language</span>:
                                languageArray.map((language, index) => {
                                    if (index === languageArray.length - 1) {
                                        return <span key={index}>{language}</span>
                                    } else {
                                        return <span key={index}>{language}, </span>
                                    }
                                })
                            }
                        </p> 
                    </section>

                    <section className={styles.detailBottom}>
                        <h4 className={styles.borderCountriesTitle}>Border Countries:</h4>
                        <div className={styles.borderCountriesContainer}>
                            {  
                                !borderCountries ? <button className={darkMode ? `${styles.borderCountryButton} ${styles.darkTheme}` : `${styles.borderCountryButton} ${styles.lightTheme}`}>No borders</button> : 
                                    borderCountries.map(country => {
                                        return (
                                            <button onClick={(e) => handleSelectedBorder(e, country)} key={country.name.common} className={darkMode ? `${styles.borderCountryButton} ${styles.darkTheme}` : `${styles.borderCountryButton} ${styles.lightTheme}`}>{country.name.common}</button>
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