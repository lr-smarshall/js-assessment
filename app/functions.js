exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {

  argsAsArray: function(fn, arr) {
    return fn.apply(fn, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return str2 => {
      return `${str}, ${str2}`;
    }
  },

  makeClosures: function(arr, fn) {

    return arr.map(x => () => fn(x));
  },

  partial: function(fn, str1, str2) {

    return fn.bind(this, str1, str2);
  },

  useArguments: function() {

    return Array.from(arguments).reduce((a, b) => a + b, 0);
  },

  callIt: function(fn) {

    return fn.apply(fn, Array.from(arguments).slice(1));
  },

  partialUsingArguments: function(fn) {

    return fn.bind(this, ...Array.from(arguments).slice(1));
  },

  curryIt: function(fn) {

    let arity = fn.length;

    const _curry = function(x) {

      fn = fn.bind(fn, x);
      arity = arity - 1;

      if (arity === 0) {

        return fn();
      } else {

        return _curry;
      }
    };

    return _curry;
    /*

    // this works as an auto-currier with variable arity
    // could be improved by ensuring the args aren't *over* the arity

    let arity = fn.length;
    const initialArgs = Array.from(arguments).slice(1);

    const _curry = function () {

      const args = Array.from(arguments);

      if (args.length > 0 && args.length === arity) {

        return fn(...args);
      } else if (args.length > 0) {

        fn = fn.bind(fn, ...args);
        arity = arity - args.length;
      }

      return _curry;
    }

    return _curry(...initialArgs);
    */
  }
};
