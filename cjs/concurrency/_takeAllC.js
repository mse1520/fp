const _take = require('../basic/_take.js');

function _takeAllC(iterator) {
  return _take([...iterator], Infinity);
}

;
module.exports = _takeAllC;