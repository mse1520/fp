const _curry1AndOption = require('./_curry1AndOption.js');

const _takeAll = require('./_takeAll.js');

const _flatL = require('../lazy/_flatL.js');

function _flat(iterator, depth = 1) {
  return _takeAll(_flatL(iterator, depth));
}

module.exports = _curry1AndOption(_flat);