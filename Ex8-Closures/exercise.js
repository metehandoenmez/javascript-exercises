function multiplyByTwo(value) {
  let number = 2;
  function inner () {
    let result = number * value;
    return result;
  }
  return inner;
}

console.log(multiplyByTwo(4)());
