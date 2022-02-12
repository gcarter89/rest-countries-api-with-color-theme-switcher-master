import { useCallback, useEffect, useState } from 'react';
import styles from '../Styles/Main.module.scss';
import { Card } from './Card.js';
import { SearchFilterContainer }  from './SearchFilterContainer.js'


export function Main() {

    //calling the api everytime I search is inefficient
    //firstly, I think we need to trigger data pulling based on the region filter.




    const [region, setRegion] = useState('Filter by Region');
    const [countries, setCountries] = useState([]);

    const fetchAll = useCallback( (
        async () => {
            const countriesData = await fetch('https://restcountries.com/v2/all?fields=name,capital,population,region,flags');
            const countriesJSON = await countriesData.json();
            return await countriesJSON;
        }
    ), [])

    
    const fetchRegion = useCallback( (
        async (region) => {
            const regionData = await fetch(`https://restcountries.com/v2/region/${region}?fields=name,capital,population,region,flags`);
            const regionJSON = await regionData.json();
            return await regionJSON;
        }
    ), [])

    useEffect(() => {

        if (region === 'Filter by Region') {
                const resultData = async () => {
                    try {
                        const result = await fetchAll();
                        setCountries(result)
                    } catch(err) {
                        console.error(err); 
                    }
                }

                resultData();
        } else {
            const resultData = async () => {
                try {
                    const result = await fetchRegion(region);
                    setCountries(result);
                } catch(err) {
                    console.error(err);
                }
            }

            resultData();
        }
    }, [region, fetchAll, fetchRegion])

    console.log(countries)

    function handleFilter(region) {
        setRegion(region)
    }


    return (
        <main className={styles.main}>
            <SearchFilterContainer handleFilter={handleFilter} region={region} />
            {countries.map((country, i) => {
                return (
                    i <= 5 - 1 ? <Card key={i} country={country} /> : null
                )
            })}
        </main>
    )
}