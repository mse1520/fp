const _curry = require('./_curry.js');

function _match(regexp, str) {
  return typeof str === 'string' && regexp instanceof RegExp ? str.match(regexp) : undefined;
}

module.exports = _curry(_match);