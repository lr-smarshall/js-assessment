exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

    const arr = str.split('');

    let lastCh = '';
    let repeatCount = 1;

    return arr.map(ch => {

      if (lastCh === ch) {
        repeatCount++;
      } else {
        repeatCount = 1;
      }

      lastCh = ch;
      if (repeatCount > amount) {

        return '';
      } else {

        return ch;
      }
    }).join('');
  },

  wordWrap: function(str, cols) {

    return str.split(" ").map((w, i, arr) => {

      if (i === arr.length - 1) {
        return w;
      } else {

        const nextWord = arr[i + 1];
        const testWord = `${w} ${nextWord}`;

        if (testWord.length >= cols) {
          return `${w}\n`;
        } else {
          return `${w} `;
        }
      }
    }).join('');
  },

  reverseString: function(str) {

    let rev = [];

    for (let i = str.length - 1; i >= 0; i--) {
      rev = rev.concat(str[i]);
    }

    return rev.join('');
  }
};
