const APIKEY = '2225ff49560b4e9b3ae97d3658e35b03';

const openWeather = async (location) => {
  let weather;

  try {
    // api call
    const query = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKEY}`;
    const response = await fetch(query, {mode: 'cors'});

    const result = await response.json();

    weather = {
      'location': result.name,
      'tempK': result.main.temp,
      'condition': result.weather[0].main, // can be more than one, but first is primary
      'iconURL': `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
    };
  } catch {
    weather = { // TODO: return something more reasonable
      'location': `Not found: ${location}`,
      'tempK': NaN,
      'condition': '',
      'iconURL': '',
    }
  }

  return weather;

}

export default openWeather;