const _curryRight = require('./_curryRight.js');

const _takeAll = require('./_takeAll.js');

const _filterL = require('../lazy/_filterL.js');

function _filter(iterator, predicate) {
  return _takeAll(_filterL(iterator, predicate));
}

module.exports = _curryRight(_filter);