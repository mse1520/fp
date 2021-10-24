const _take = require('./_take.js');

function _takeAll(iterator) {
  return _take(iterator, Infinity);
}

module.exports = _takeAll;