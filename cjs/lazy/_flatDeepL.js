const _flatL = require('./_flatL.js');

function _flatDeepL(iterator) {
  return _flatL(iterator, Infinity);
}

module.exports = _flatDeepL;