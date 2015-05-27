var assert = require('chai').assert

it('should compose two functions', function() {
	function add1(x) { return x+1; }
	function double(x) { return x*2; }
	assert.equal((double +. add1)(2), 6)
})

it('should sequence two functions', function() {
	function add1(x) { return x+1; }
	function double(x) { return x*2; }
	assert.equal((double +| add1)(2), 5)
})
