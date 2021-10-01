const _curryRight = require('../basic/_curryRight.js');

const _filterL = require('../lazy/_filterL.js');

const _takeAllC = require('./_takeAllC.js');

function _rejectEntriesC(entries, predicate) {
  return _takeAllC(_filterL(entries, ([_, value], index) => !predicate(value, index)));
}

module.exports = _curryRight(_rejectEntriesC);