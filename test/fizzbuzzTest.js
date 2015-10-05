var chai = require('chai');
var fizzbuzz = require('../lib/fizzbuzz');
//required file must have a module.exports tag at the bottom

describe("Fizzbuzz", function() {
  it('is a function', function() {
    chai.expect(fizzbuzz).be.function
  });
})
