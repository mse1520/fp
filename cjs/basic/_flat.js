const curryrightFlat = require('../internal/curryRightFlat.js');

const _takeAll = require('./_takeAll.js');

const _flatL = require('../lazy/_flatL.js');

function _flat(iterator, depth = 1) {
  return _takeAll(_flatL(iterator, depth));
}

module.exports = curryrightFlat(_flat);