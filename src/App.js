import './App.scss';
import { Header } from './Components/Header.js';
import { CountriesList }  from './Components/CountriesList.js'
import { CountryDetail } from './Components/CountryDetail.js';


function App() {
    return (
        <div className="App">
            <Header/>
            <CountryDetail />
            <CountriesList />
        </div>
    );
}

export default App;
