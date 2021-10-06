const _takeAll = require('./_takeAll.js');

const _flatL = require('../lazy/_flatL.js');

function _flatDeep(iterator) {
  return _takeAll(_flatL(iterator, Infinity));
}

module.exports = _flatDeep;