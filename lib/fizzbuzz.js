fizzbuzz = function(times) {
  var result = ''
  for (var i = 1; i < times + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result += 'fizzbuzz ';
    } else if (i % 3 == 0) {
      result += 'fizz ';
    } else if (i % 5 == 0) {
      result += 'buzz ';
    } else {
      result += i + ' ';
    }
  };
  return result
}

module.exports = fizzbuzz;
