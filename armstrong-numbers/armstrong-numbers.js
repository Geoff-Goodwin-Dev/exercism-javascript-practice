const ArmstrongNumber = {
  validate: function (input) {
    if (typeof input !== 'number') {
      throw new Error('input must be a number')
    }
    else {
      let testResults = 0;
      let digitsArray = input.toString().split('');
      for (let digit of digitsArray) {
        testResults += Math.pow(parseInt(digit), digitsArray.length);
      }
      return testResults === input;
    }
  }
};

module.exports = ArmstrongNumber;