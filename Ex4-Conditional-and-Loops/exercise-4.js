function sumUntil(maxValue) {
  let total = 0;
  for (let i = 0; i <= maxValue; i++) {
    total = total + i;
  }
  return total;
}

console.log(sumUntil(5));