exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {

  valueAtBit: function(num, bit) {

    const bin = num.toString(2);
    const i = (bin.length - bit);

    return parseInt(bin[i], 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {

    const bin = num.toString(2);
    const padAmt = 8 - bin.length;
    let pad = "";

    for (let i = 0; i < padAmt; i++) {
      pad += '0';
    }

    return pad + bin;
  },

  multiply: function(a, b) {

    return parseFloat((a * b).toPrecision(1));
  }
};
