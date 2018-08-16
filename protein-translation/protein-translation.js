let translate = function (proteinLetterString) {
  if(!proteinLetterString) {
    return [];
  }
  else {
    let codonArray = proteinLetterString.match(/.../g);
    let solution = [];
    for (let codon of codonArray) {
      switch (codon) {
        case 'AUG':
          solution.push('Methionine');
          break;
        case 'UUU':
        case 'UUC':
          solution.push('Phenylalanine');
          break;
        case 'UUA':
        case 'UUG':
          solution.push('Leucine');
          break;
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
          solution.push('Serine');
          break;
        case 'UAU':
        case 'UAC':
          solution.push('Tyrosine');
          break;
        case 'UGU':
        case 'UGC':
          solution.push('Cysteine');
          break;
        case 'UGG':
          solution.push('Tryptophan');
          break;
        case 'UAA':
        case 'UAG':
        case 'UGA':
          return solution;
        default:
          throw new Error('Invalid codon');
      }
    }
    return solution;
  }
};

module.exports = translate;