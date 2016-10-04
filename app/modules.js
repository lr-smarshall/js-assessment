exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {

  createModule: function(greeting, name) {

    return (function () {

      this.greeting = greeting;
      this.name = name;
      this.sayIt = () => {
        return `${this.greeting}, ${this.name}`;
      };

      return this;
  })();


  }
};
