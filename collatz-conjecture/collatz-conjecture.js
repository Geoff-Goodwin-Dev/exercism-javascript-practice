let CollatzConjecture = function () {
  this.steps = function (num) {
    let stepsCounter = 0;
    if(num <= 0) throw new Error('Only positive numbers are allowed');
    while (num > 1) {
      num % 2 === 0 ? num /= 2 : num = 3 * num + 1;
      stepsCounter++;
    }
    return stepsCounter;
  }
};

module.exports = CollatzConjecture;