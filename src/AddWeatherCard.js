import React, { useState } from 'react';

function AddWeatherCard(props) {
  const [location, setLocation] = useState('');

  return (
    <div className="form">
      <input
        type="text"
        value = { location }
        onChange = { (e) => { setLocation(e.target.value) } }
        onKeyDown = { (e) => { if (e.key === 'Enter') {
          props.addLocation(location);
          setLocation('');
        } } }
        >

        </input>
      <button onClick = { () => {
        props.addLocation(location);
        setLocation('');
        } }>
        Add location
      </button>
    </div>
  )
}

export default AddWeatherCard;
