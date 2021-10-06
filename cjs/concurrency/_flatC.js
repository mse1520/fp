const _curry1AndOption = require('../basic/_curry1AndOption.js');

const _takeAll = require('../basic/_takeAll.js');

const _flatL = require('../lazy/_flatL.js');

function _flatC(iterator, depth = 1) {
  return _takeAll(_flatL([...iterator], depth));
}

module.exports = _curry1AndOption(_flatC);