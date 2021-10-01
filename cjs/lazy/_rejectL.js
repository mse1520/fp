const _curryRight = require('../basic/_curryRight.js');

const _filterL = require('../lazy/_filterL.js');

function _rejectL(iterator, predicate) {
  return _filterL(iterator, (value, index) => !predicate(value, index));
}

module.exports = _curryRight(_rejectL);