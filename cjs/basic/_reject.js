const _curryRight = require('./_curryRight.js');

const _takeAll = require('./_takeAll.js');

const _filterL = require('../lazy/_filterL.js');

function _reject(iterator, predicate) {
  return _takeAll(_filterL(iterator, (value, index) => !predicate(value, index)));
}

module.exports = _curryRight(_reject);