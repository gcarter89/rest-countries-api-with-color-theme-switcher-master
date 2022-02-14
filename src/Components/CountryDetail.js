import { useCallback, useEffect, useState } from 'react';
import styles from '../Styles/CountryDetail.module.scss';
import { CountryDetailCard } from './CountryDetailCard';

export function CountryDetail({ closeDetail, selectedCountry, handleSelectedBorder }) {


    const [results, setResults] = useState([]);
    const [borderCountries, setBorderCountries] = useState(null);
    const [borderResults, setBorderResults] = useState([]);

    const fetchSelectedCountry = useCallback( (
        async () => {
            const selectedCountryData = await fetch(`https://restcountries.com/v3.1/alpha/${selectedCountry}`);
            const selectedCountryJSON = await selectedCountryData.json();
            return selectedCountryJSON;
        }
    ), [selectedCountry]);

    const fetchBorderCountries = useCallback( (
        async () => {
            if (borderCountries) {
                const borderCountriesData = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCountries}`);
                const borderCountriesJSON = await borderCountriesData.json();
                return borderCountriesJSON;
            }
        }
    ),[borderCountries])

    useEffect(() => {
        const resultData = async () => {
            try {
                const result = await fetchSelectedCountry();
                setResults(result);

                if (!result[0].borders) {
                    setBorderCountries(null);
                } else {
                    setBorderCountries(result[0].borders.toString())
                }
            } catch(err) {
                console.error(err)
            }
        }
        resultData()
    }, [fetchSelectedCountry])

    useEffect(() => {
        const resultData = async() => {
            try {
                const result = await fetchBorderCountries();
                setBorderResults(result);
            } catch(err) {
                console.error(err);
            }
        }
        resultData()

    }, [fetchBorderCountries])


    return (
        <main className={styles.detail}>
        {
            results.length === 0 ? <h1>Not loading</h1> : <CountryDetailCard handleSelectedBorder={handleSelectedBorder} borderCountries={borderResults} country={results} closeDetail={closeDetail} />

        }
        </main>
    )
}