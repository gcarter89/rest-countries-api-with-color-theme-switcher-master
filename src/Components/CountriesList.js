import { useCallback, useEffect, useState, createRef } from 'react';
import styles from '../Styles/CountriesList.module.scss';
import { CountriesListCard } from './CountriesListCard.js';
import { countriesAlphaSort } from '../Helpers/CountriesAlphaSort';
import { SearchFilterContainer }  from './SearchFilterContainer.js'


export function CountriesList({handleSelectedCountry, countries, setCountries}) {

    const [region, setRegion] = useState('Filter by Region');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [results, setResults] = useState([...countries]);
    const [param, setParam] = useState('');
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
            const countriesData = await fetch('https://restcountries.com/v3.1/all');
            // const countriesData = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,cca3');
            const countriesJSON = await countriesData.json();
            return await countriesJSON;
        }
    ), [])    


    useEffect(() => {
        if (countries.length === 0) {
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
            }
        }

    }, [region, fetchAll, setCountries, countries]
    )


    function handleQuery(event) {
        // event.preventDefault();
        setLimit(5);
        const searchParam = event.target.value;
        setParam(event.target.value);

        if (searchParam === '') {
            if (filteredCountries.length === 0) {
                setResults(countries);
            } else {
                setResults(filteredCountries);
            }
        } else {
            if (filteredCountries.length === 0) {
                const filteredResults = countries.filter(element => element.name.common.toLowerCase().startsWith(searchParam.toLowerCase()));
                setResults(filteredResults);
            } else {
                const filteredResults = filteredCountries.filter(element => element.name.common.toLowerCase().startsWith(searchParam.toLowerCase()));
                setResults(filteredResults);
            }
        }
    }

    function handleFilter(region, countryList = countries) {
        setLimit(5);
        setRegion(region);
        if (region === 'All Countries') {
            setFilteredCountries(countryList);

            if (param === '') {
                setResults(countryList);
            } else {
                const paramList = countryList.filter(element => element.name.common.toLowerCase().startsWith(param.toLowerCase()));
                setResults(paramList);
            }

        } else {
            const filteredCountries = countryList.filter(country => {
                return (country.region === region);
            });

            setFilteredCountries(filteredCountries);

            if (param === '') {
                setResults(filteredCountries);
            } else {
                const paramList = filteredCountries.filter(element => element.name.common.toLowerCase().startsWith(param.toLowerCase()));
                setResults(paramList);
            }
            
        }
    }

    return (
        <main className={styles.main}>
            <SearchFilterContainer handleFilter={handleFilter} handleQuery={handleQuery} region={region} />
            <section className={styles.cardsContainer}>
                {
                    results.length === 0 ? <h1>No results</h1> :
                    results.map((country, i) => {
                        if (i <= limit - 1) {
                            if (i === limit - 1) {
                                return <CountriesListCard ref={lastCardRef} key={i} country={country} handleSelectedCountry={handleSelectedCountry} />
                            } else {
                                return <CountriesListCard key={i} country={country} handleSelectedCountry={handleSelectedCountry} />
                            }
                        } else {
                            return null;
                        }           
                    })
                }
            </section>

        </main>
    )
}