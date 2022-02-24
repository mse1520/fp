const _curryRight = require('../basic/_curryRight.js');

const _concatL = require('./_concatL.js');

function _unshiftL(iterator1, iterator2) {
  return _concatL(iterator2, iterator1);
}

module.exports = _curryRight(_unshiftL);