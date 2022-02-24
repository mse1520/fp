const _curry = require('./_curry.js');

function _test(regexp, str) {
  return typeof str === 'string' && regexp instanceof RegExp ? regexp.test(str) : undefined;
}

module.exports = _curry(_test);