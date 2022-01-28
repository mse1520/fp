const _identity = require('./_identity.js');

const _mapL = require('../lazy/_mapL.js');

const _takeAll = require('./_takeAll.js');

function _toArray(iterator) {
  return _takeAll(_mapL(iterator, _identity));
}

module.exports = _toArray;