const _entriesL = require('../lazy/_entriesL.js');

const _takeAllC = require('./_takeAllC.js');

function _entriesC(object) {
  return _takeAllC(_entriesL(object));
}

module.exports = _entriesC;