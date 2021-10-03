const _flatL = require('../lazy/_flatL.js');

const _takeAllC = require('./_takeAllC.js');

function _flatC(iterator) {
  return _takeAllC(_flatL(iterator));
}

module.exports = _flatC;