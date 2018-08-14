
const checkForBadChars = (stringDNAInput) => {
  let arrayOfChars = stringDNAInput.split('');
  console.log(arrayOfChars);
  const acceptableCharsString = 'GCTA';
  for (let i = 0; i < arrayOfChars.length; i++) {
    if (acceptableCharsString.indexOf(arrayOfChars[i]) === -1)
      throw new Error('Invalid input');
  }
  return 'all good';
};

let DnaTranscriber = function () {
  this.toRna = function(stringDNAInput) {
    let result = checkForBadChars(stringDNAInput);
    console.log('result:', result);
    if (result === 'all good') {

    }
    return result;
  };

};

module.exports = DnaTranscriber;