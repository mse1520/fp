const _map = require('./_map.js');

const _identity = require('./_identity.js');

function _toArray(iterator) {
  return _map(iterator, _identity);
}

module.exports = _toArray;