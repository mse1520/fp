const _keysL = require('../lazy/_keysL.js');

const _takeAllC = require('./_takeAllC.js');

function _keysC(object) {
  return _takeAllC(_keysL(object));
}

module.exports = _keysC;