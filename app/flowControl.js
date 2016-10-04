exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {

  fizzBuzz: function(num) {

    const by3 = n => n % 3 === 0;
    const by5 = n => n % 5 === 0;
    const by3And5 = n => by3(n) && by5(n);

    if (by3And5(num)) {
      return "fizzbuzz";
    } else if (by3(num)) {
      return "fizz";
    } else if (by5(num)) {
      return "buzz";
    } else if (isNaN(num)) {
      return false;
    } else {
      return num;
    }

    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

  }
};
