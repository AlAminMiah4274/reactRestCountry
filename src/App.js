import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Person from './components/Person/Person';
import Header from './components/Header/Header';
import './components/Header/Header.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Country></Country>
      <Person></Person>
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);

  return (
    <div>
      <h1>Visiting Every Country of the World !!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(conutry => <Countries name={conutry.name.common} population={conutry.population}></Countries>)
      }
    </div>
  );
}

function Countries(props) {
  return (
    <div className='country'>
      <h2>Name: {props.name}</h2>
      <h4>Population: {props.population}</h4>
    </div>
  );
}

export default App;
