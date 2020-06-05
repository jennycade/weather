import React from 'react';

function UnitPicker (props) {
  return (
    <select
      value = { props.units }
      onChange = { (e) => { props.pickUnits(e.target.value) } }
    >
      <option
        value = 'F'>
        Farenheit
      </option>
      <option
        value = 'C'>
        Celcius
      </option>
      <option
        value = 'K'>
        Kelvin
      </option>
    </select>
  );
}

export default UnitPicker;
