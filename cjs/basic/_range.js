const _takeAll = require('./_takeAll.js');

const _rangeL = require('../lazy/_rangeL.js');

function _range(...args) {
  return _takeAll(_rangeL(...args));
}

module.exports = _range;