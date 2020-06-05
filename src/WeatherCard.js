import React, { useEffect, useState } from 'react';
import tempToUnit from './tempToUnit';

import openWeather from './OpenWeather';

function WeatherCard (props) {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    const details = await openWeather(props.location);
    setWeather(details);
  }

  // console.log(weather);
  return (
    <div className='weatherCard'>
      <h1>{ weather.location }</h1>
      <img src={ weather.iconURL } alt={ weather.condition } />
      <p>{ weather.condition }</p>
      <p>{ tempToUnit(weather.tempK, props.units) }</p>
    </div>
  );
}

export default WeatherCard;
