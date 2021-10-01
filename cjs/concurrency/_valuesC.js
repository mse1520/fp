const _valuesL = require('../lazy/_valuesL.js');

const _takeAllC = require('./_takeAllC.js');

function _valuesC(object) {
  return _takeAllC(_valuesL(object));
}

module.exports = _valuesC;