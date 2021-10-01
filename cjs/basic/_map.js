const _curryRight = require('./_curryRight.js');

const _takeAll = require('./_takeAll.js');

const _mapL = require('../lazy/_mapL.js');

function _map(iterator, predicate) {
  return _takeAll(_mapL(iterator, predicate));
}

module.exports = _curryRight(_map);