import './App.scss';
import { Header } from './Components/Header.js';
import { CountriesList }  from './Components/CountriesList.js'
import { CountryDetail } from './Components/CountryDetail.js';
import { useState } from 'react';


function App() {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [openDetail, setOpenDetail] = useState(false);

    function handleSelectedCountry(event, country) {
        event.preventDefault();
        setSelectedCountry(country.name.common);
        setOpenDetail(true);
    }

    function closeDetail(event) {
        event.preventDefault();
        setOpenDetail(false);
        setSelectedCountry(null);
    }

    return (
        <div className="App">
            <Header/>
            {
                openDetail ? <CountryDetail selectedCountry={selectedCountry} closeDetail={closeDetail} /> : <CountriesList handleSelectedCountry={handleSelectedCountry} />
            }
        </div>
    );
}

export default App;
