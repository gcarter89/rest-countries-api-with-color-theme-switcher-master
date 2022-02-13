import { useCallback, useEffect, useState, createRef } from 'react';
import styles from '../Styles/CountriesList.module.scss';
import { CountriesListCard } from './CountriesListCard.js';
import { countriesAlphaSort } from '../Helpers/CountriesAlphaSort';
import { SearchFilterContainer }  from './SearchFilterContainer.js'


export function CountriesList({handleSelectedCountry}) {

    const [region, setRegion] = useState('Filter by Region');
    const [countries, setCountries] = useState([]);
    const [results, setResults] = useState([]);
    const [searchParam, setSearchParam] = useState('');

    const [limit, setLimit] = useState(5);

    const observer = createRef();

    const lastCardRef = useCallback(node => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setLimit(limit => limit + 5);
            }
        })

        if (node) {
            observer.current.observe(node);
        }

    },[observer])

    const fetchAll = useCallback( (
        async () => {
            const countriesData = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags');
            const countriesJSON = await countriesData.json();
            return await countriesJSON;
        }
    ), [])

    
    const fetchRegion = useCallback( (
        async (region) => {
            const regionData = await fetch(`https://restcountries.com/v3.1/region/${region}?fields=name,capital,population,region,flags`);
            const regionJSON = await regionData.json();
            return await regionJSON;
        }
    ), [])

    useEffect(() => {

        if (region === 'Filter by Region') {
                const resultData = async () => {
                    try {
                        const result = await fetchAll();
                        const sortedResult = await countriesAlphaSort(result);
                        setCountries(sortedResult);
                        setResults(sortedResult);
                    } catch(err) {
                        console.error(err); 
                    }
                }

                resultData();
        } else {
            const resultData = async () => {
                try {
                    const result = await fetchRegion(region);
                    const sortedResult = await countriesAlphaSort(result);
                    setCountries(sortedResult);
                    setResults(sortedResult);
                } catch(err) {
                    console.error(err);
                }
            }

            resultData();
        }
    }, [region, fetchAll, fetchRegion])


    useEffect(() => {
        if (searchParam === '') {
            setResults(countries);
        } else {
            const filteredResults = countries.filter(element => element.name.common.toLowerCase().startsWith(searchParam.toLowerCase()));
            setResults(filteredResults);
        }


    },[countries, searchParam])

    function handleQuery(event) {
        event.preventDefault();
        setLimit(5);
        setSearchParam(event.target.value);
        
    }

    function handleFilter(region) {
        setLimit(5);
        setRegion(region)
    }


    return (
        <main className={styles.main}>
            <SearchFilterContainer handleFilter={handleFilter} handleQuery={handleQuery} region={region} />
            <section className={styles.cardsContainer}>
                {
                    results.length === 0 ? <h1>No results</h1> :
                    
                    results.map((country, i) => {
                        if (i <= limit -1) {
                            if (i === limit - 1) {
                                return <CountriesListCard ref={lastCardRef} key={i} country={country} handleSelectedCountry={handleSelectedCountry} />
                            } else {
                                return <CountriesListCard key={i} country={country} handleSelectedCountry={handleSelectedCountry} />
                            }
                        }                
                })}
            </section>

        </main>
    )
}