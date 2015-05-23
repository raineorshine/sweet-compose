# sweet-compose
[![NPM version](https://badge.fury.io/js/sweet-compose.svg)](http://badge.fury.io/js/sweet-compose)

> Sweet js macro for function composition


## Usage

### command line

```sh
$ npm install --save sweet-compose
$ sjs -m sweet-compose myfile.js
```

```js
function add(x,y) { return x+y; }
function double(x) { return x*2; }
console.log((double compose add)(2,3)) // 10
```

If you want to get really fancy, you can add a step to your build process which replaces the '◦' character with 'compose', and add a keyboard shortcut for (e.g. in DefaultKeyBinding.dict). See https://github.com/metaraine/wordsoap.

## License

ISC © [Raine Lourie](https://github.com/metaraine)
