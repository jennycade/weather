import round from './round';

function tempToUnit(tempK, unit = 'F') {
  let num;
  let suffix;
  if (unit === 'K') {
    num = round(tempK, 1);
    suffix = ' K';
  } else {
    const celcius = tempK - 273;
    if (unit === 'C') {
      num = round(celcius, 1);
      suffix = '° C';
    } else if (unit === 'F') {
      num = round(celcius * 9/5 + 32, 0);
      suffix = '° F';
    }

  }
  return `${num}${suffix}`;
}

export default tempToUnit;