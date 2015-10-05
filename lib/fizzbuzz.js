fizzbuzz = function(times) {
  for (var i = 1; i < times; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('fizzbuzz');
    } else if (i % 3 == 0) {
      console.log('fizz');
    } else if (i % 5 == 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  };
}

module.exports = fizzbuzz;
