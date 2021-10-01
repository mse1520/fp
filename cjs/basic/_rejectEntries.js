const _curryRight = require('./_curryRight.js');

const _takeAll = require('./_takeAll.js');

const _filterL = require('../lazy/_filterL.js');

function _rejectEntries(entries, predicate) {
  return _takeAll(_filterL(entries, ([_, value], index) => !predicate(value, index)));
}

module.exports = _curryRight(_rejectEntries);