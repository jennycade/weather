function round(num, dec = 0) {
  const factor = 10 ** dec;
  return Math.round(num * factor) / factor;
}

export default round;