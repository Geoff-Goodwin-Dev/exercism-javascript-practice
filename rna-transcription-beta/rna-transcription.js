let DnaTranscriber = function () {
  this.toRna = function(stringDNAInput) {
    let result = '';
    for (let i = 0; i < stringDNAInput.length; i++) {
      switch (stringDNAInput[i]) {
        case 'G':
          result += 'C';
          break;
        case 'C':
          result += 'G';
          break;
        case 'T':
          result += 'A';
          break;
        case 'A':
          result += 'U';
          break;
        default:
          throw new Error('Invalid input');
      }
    }
    return result;
  };
};

module.exports = DnaTranscriber;