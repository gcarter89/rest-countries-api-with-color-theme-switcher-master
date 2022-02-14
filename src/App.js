import './App.scss';
import styles from './Styles/App.module.scss'
import { Header } from './Components/Header.js';
import { CountriesList }  from './Components/CountriesList.js'
import { CountryDetail } from './Components/CountryDetail.js';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
    
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [openDetail, setOpenDetail] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    



    function handleSelectedCountry(event, country) {
        event.preventDefault();
        setSelectedCountry(country.cca3);
        setOpenDetail(true);
    }

    function closeDetail(event) {
        event.preventDefault();
        setOpenDetail(false);
        setSelectedCountry(null);
    }

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            <div className={openDetail ? styles.appDetail : 'App'}>
            <Header />
            {
                openDetail ? <CountryDetail handleSelectedBorder={handleSelectedCountry} selectedCountry={selectedCountry} closeDetail={closeDetail} /> : <CountriesList handleSelectedCountry={handleSelectedCountry} />
            }
        </div>
        </ThemeContext.Provider>

    );
}

export default App;
