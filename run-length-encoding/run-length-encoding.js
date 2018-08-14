const RLE = {
  encode: function (inputString) {
    console.log(`inputString: '${inputString}'`);
    if (inputString.length < 2) {
      return inputString;
    }
    else {
      let dupGroupsArray = [];
      let leftovers = this.checkForRepeated(inputString);
      while (this.checkForRepeated(leftovers)[1].length > 0) {
        dupGroupsArray.push(this.checkForRepeated(leftovers)[0]);
        leftovers = this.checkForRepeated(leftovers[1]);
        console.log(dupGroupsArray);
      }
    }
  },
  checkForRepeated: function(inputSubString) {

    for(let i = 0; i < inputSubString.length; i++) {
      if(i > 0 && inputSubString[i] !== inputSubString[i - 1]) {
        console.log('index of end of repeated characters:', i - 1);
        console.log([inputSubString.substring(0, i), inputSubString.substring(i)]);
        return [inputSubString.substring(0, i), inputSubString.substring(i)];
      }
    }
  },

  decode: function (inputString) {
  }
};

module.exports = RLE;