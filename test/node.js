
var normalize = require('..');
var fixtures = require('./fixtures');

describe('normalize', function(){
  fixtures.forEach(function(fixture){
    describe(fixture.name, function(){
      it('should work', function(){
        normalize(fixture.input).should.eql(fixture.output);
      })
    })
  })
})
