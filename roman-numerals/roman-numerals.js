const toRoman = (numToConvert) => {
  let result = '';
  const romanNumeral = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  for (let i = 0; i < romanNumeral.length; i++) {
    while (numToConvert % romanNumeral[i][1] < numToConvert) {
      result += romanNumeral[i][0];
      numToConvert -= romanNumeral[i][1];
    }
  }
  return result;
};

module.exports = toRoman;