const _curryRight = require('../basic/_curryRight.js');

const _concatL = require('./_concatL.js');

function _unshiftL(iterator, args) {
  return _concatL(args, [iterator]);
}

module.exports = _curryRight(_unshiftL);