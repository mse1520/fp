const _takeAll = require('./_takeAll.js');

const _flatL = require('../lazy/_flatL.js');

function _flat(iterator) {
  return _takeAll(_flatL(iterator));
}

module.exports = _flat;