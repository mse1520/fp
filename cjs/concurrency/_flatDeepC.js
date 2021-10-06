const _takeAll = require('../basic/_takeAll.js');

const _flatL = require('../lazy/_flatL.js');

function _flatDeepC(iterator) {
  return _takeAll(_flatL([...iterator], Infinity));
}

module.exports = _flatDeepC;