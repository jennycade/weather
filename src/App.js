import React, { useState } from 'react';
import './App.css';

import AddWeatherCard from './AddWeatherCard';
import WeatherCard from './WeatherCard';
import UnitPicker from './UnitPicker';

function App() {
  const [locations, setLocations] = useState(['94601']);
  const [units, setUnits] = useState('F');

  const addLocation = (location) => { // TODO: check to make sure the location is valid before adding
    const newLocations = [
      ...locations,
      location,
    ];
    setLocations(newLocations);
  }

  const pickUnits = (newUnits) => {
    setUnits(newUnits);
  }

  return (
    <div className="App">
      <AddWeatherCard addLocation = { addLocation } />
      <UnitPicker
        units = { units }
        pickUnits = { pickUnits }
      />
      <div class="cardContainer">
        { locations.map((location) => {
          return (
          <WeatherCard
            key = { location }
            location = { location }
            units = { units }
          />);
        }) }
      </div>
    </div>
  );
}

export default App;
