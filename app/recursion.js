exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {

  listFiles: function(data, dirName) {

    let files = [];

    const isStringNotObject = x => x.length != undefined;
    const getFiles = dir => dir.files.filter(isStringNotObject);
    const getDirs = dir => dir.files.filter(x => !isStringNotObject(x));

    const doGetFiles = x => {

      files = files.concat(getFiles(x));
      let dirs = getDirs(x);

      if (dirs.length === 0) {

        return;
      } else {

        dirs.forEach(doGetFiles);
      }
    };

    const doGetFilesForDir = (dirName, data) => {

      if (data.dir === dirName) {
        doGetFiles(data);
      } else {

        const dirs = getDirs(data);
        const matches = dirs.filter(d => d.dir === dirName);

        if (matches.length > 0) {

          doGetFilesForDir(dirName, matches[0]);
        } else {

          dirs.map(doGetFilesForDir.bind(this, dirName))[0];
        }
      }
    };

    if (!dirName) {

      doGetFiles(data);
      return files;
    } else {

      doGetFilesForDir(dirName, data);
      return files;
    }
  },

  permute: function(arr) {
  },

  fibonacci: function(n) {

    if (n === 1 || n === 2) {

      return 1;
    } else {

      let res = [1, 1];

      for (let i = 3; i <= n; i++) {

        const a = res.slice(0, i).reverse()[0];
        const b = res.slice(0, i).reverse()[1];

        res = res.concat(a + b);
      }

      return res.reverse()[0];
    }
  },

  validParentheses: function(n) {

  }
};
