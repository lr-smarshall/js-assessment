exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {

    return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
  },

  iterate: function(obj) {

    return Object.keys(obj).map(k => {
      return `${k}: ${obj[k]}`;
    });
  }
};
