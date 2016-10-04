exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {

  count: function (start, end) {

    let current = start;
    console.log(current);

    const cancel = setInterval(() => {

      current++;
      console.log(current);

      if (current == end) {
        clearInterval(cancel);
        return;
      }
    }, 100);

    return {
      cancel: () => {
        clearInterval(cancel);
      }
    }
  }
};
