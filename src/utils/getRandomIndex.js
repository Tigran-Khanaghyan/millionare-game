export function getRandomIndex(min, max, number) {
  const random = Math.floor(Math.random() * (max - min) + min);
  if (random === number && number === min) {
    return random + 1;
  } else if (random === number && number === max - 1) {
    return random - 1;
  }
  return random;
}
