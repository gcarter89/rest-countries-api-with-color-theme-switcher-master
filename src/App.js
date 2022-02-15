import './App.scss';
import styles from './Styles/App.module.scss'
import { Header } from './Components/Header.js';
import { CountriesList }  from './Components/CountriesList.js'
import { CountryDetail } from './Components/CountryDetail.js';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [openDetail, setOpenDetail] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    function handleSelectedCountry(event, country) {
        event.preventDefault();
        const selectedCountryQuery = countries.filter(elem => {
            return (elem.cca3 === country.cca3);
        })
        setSelectedCountry(selectedCountryQuery);
        setOpenDetail(true);
    }

    function closeDetail(event) {
        event.preventDefault();
        setOpenDetail(false);
        setSelectedCountry(null);
    }

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            <div className=
            {
                darkMode ? 
                    openDetail ? `${styles.appDetail} AppDark` : 'AppDark'  
                    : openDetail ? `${styles.appDetail} AppLight` : 'AppLight'
            }
            >
            <Header />
            {
                openDetail ? <CountryDetail countries={countries} handleSelectedBorder={handleSelectedCountry} selectedCountry={selectedCountry} closeDetail={closeDetail} /> : <CountriesList countries={countries} setCountries={setCountries}  handleSelectedCountry={handleSelectedCountry} />
            }
        </div>
        </ThemeContext.Provider>
    );
}

export default App;
