# sweet-compose
[![NPM version](https://badge.fury.io/js/sweet-compose.svg)](http://badge.fury.io/js/sweet-compose)

> Sweet js macro for function composition


## Usage

```sh
$ npm install --save sweet-compose
$ sjs -m sweet-compose myfile.js
```

```js
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
```

## License

ISC © [Raine Lourie](https://github.com/metaraine)
