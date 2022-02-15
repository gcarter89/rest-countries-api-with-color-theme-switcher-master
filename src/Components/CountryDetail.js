import { useCallback, useEffect, useState } from 'react';
import styles from '../Styles/CountryDetail.module.scss';
import { CountryDetailCard } from './CountryDetailCard';

export function CountryDetail({ closeDetail, countries, selectedCountry, handleSelectedBorder }) {

    const [selectedResult, setSelectedResult] = useState([]);
    const [borderCountries, setBorderCountries] = useState(null);
    const [borderResults, setBorderResults] = useState([]);

    const fetchBorderCountries = useCallback( (
        () => {
            if (borderCountries) {

                const borderResults = borderCountries.map((borderCountry) => {
                    return (
                        countries.filter(country => {
                            return (country.cca3 === borderCountry);
                        })
                    )
                })
                return borderResults;
            }
        }
    ),[borderCountries, countries])

    useEffect(() => {
        const resultData = () => {
            try {
                const result = selectedCountry;
                setSelectedResult(result);

                if (!result[0].borders) {
                    setBorderCountries(null);
                } else {
                    setBorderCountries(result[0].borders);
                }
            } catch(err) {
                console.error(err)
            }
        }
        resultData()
    }, [selectedCountry])

    useEffect(() => {
        const resultData = () => {
            try {
                const result = fetchBorderCountries();
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
            selectedResult.length === 0 ? <h1>Loading...</h1> : 
                <CountryDetailCard handleSelectedBorder={handleSelectedBorder} borderCountries={borderResults} country={selectedResult} closeDetail={closeDetail} />
        }
        </main>
    )
}