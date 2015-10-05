var expect = require('chai').expect;
var equal = require('chai').equal;
var fizzbuzz = require('../lib/fizzbuzz');
//required file must have a module.exports tag at the bottom

describe("Fizzbuzz", function() {
  it('is a function', function() {
    expect(fizzbuzz).be.function
  });

  it('contains correct number substitions through 20', function() {
    expect(fizzbuzz(20)).equal("1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz ")
  });
})
