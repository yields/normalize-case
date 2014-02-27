
describe('normalize-case', function(){
  var normalize = require('normalize-case');
  var assert = require('assert');
  var eql = require('eql');

  fixtures.forEach(function(fixture){
    describe(fixture.name, function(){
      it('should work', function(){
        assert(eql(normalize(fixture.input), fixture.output));
      })
    });
  });

});
