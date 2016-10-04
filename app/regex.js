exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {

  containsNumber: function(str) {
    const regexp = /\d/gi;
    const matches = str.match(regexp);

    return !!matches;
  },

  containsRepeatingLetter: function(str) {

    // is there a better way of doing this?
    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const regexp = new RegExp(alpha.reduce((m, x) => `${m}${x}{2,}|`, ""), 'gi');

    const matches = str.match(regexp);

    return matches.filter(x => x.length > 0).length > 0;
  },

  endsWithVowel: function(str) {

    const vowels = ['a','e','i','o','u'];

    return vowels.reduce((m, v) => {

      if (m) {
        return m;
      } else {
        return str.toLowerCase().endsWith(v);
      }
    }, false);
  },

  captureThreeNumbers: function(str) {

    const regexp = /(\d{3})/g;
    const matches = str.match(regexp);

    return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {

    const regexp = /^\d{3}-\d{3}-\d{4}$/;
    const matches = str.match(regexp);

    return matches !== null && matches.length > 0;
  },

  isUSD: function(str) {
  }
};
