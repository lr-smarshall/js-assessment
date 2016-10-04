exports = typeof window === 'undefined' ? global : window;

function isNullOrUndefined (x) {
  return x != undefined;
}

exports.arraysAnswers = {

  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((m, a) => m + a);
  },

  remove: function(arr, item) {

    return arr.filter(x => x !== item);
  },

  removeWithoutCopy: function(arr, item) {

    const removeItem = i => arr.splice(i, 1);

    const getNextPosition = () => {

      const pos = arr.
        map((x, i) => x === item ? i : null).
        filter(isNullOrUndefined);

      if (pos.length > 0) {

        return pos[0];
      } else {

        return null;
      };
    };

    while (getNextPosition()) {

      removeItem(getNextPosition());
    }

    return arr;
  },

  append: function(arr, item) {
    return arr.concat(item);
  },

  truncate: function(arr) {

    return arr.slice(0, -1);
  },

  prepend: function(arr, item) {

    return [item].concat(arr);
  },

  curtail: function(arr) {

    return arr.slice(1);
  },

  concat: function(arr1, arr2) {

    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {

    return arr.slice(0, index).concat(item).concat(arr.slice(index));
  },

  count: function(arr, item) {

    return arr.filter(x => x === item).length;
  },

  duplicates: function(arr) {

    const isDuplicate = (arr, x) => arr.filter(y => x === y).length > 1;
    const duplicates =  arr.filter(isDuplicate.bind(this, arr));

    let fresh = [];

    duplicates.forEach(x => {
      if (fresh.indexOf(x) === -1) {
        fresh.push(x);
      }
    });

    return fresh;
  },

  square: function(arr) {
    return arr.map(x => x * x);
  },

  findAllOccurrences: function(arr, target) {
    return arr.map((x, i) => x === target ? i : null).filter(isNullOrUndefined);
  }
};
