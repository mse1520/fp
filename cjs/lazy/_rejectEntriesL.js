const _curryRight = require('../basic/_curryRight.js');

const _filterL = require('../lazy/_filterL.js');

function _rejectEntriesL(entries, predicate) {
  return _filterL(entries, ([_, value], index) => !predicate(value, index));
}

module.exports = _curryRight(_rejectEntriesL);