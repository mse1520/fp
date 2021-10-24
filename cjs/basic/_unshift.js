const _curryRight = require('./_curryRight.js');

const _takeAll = require('./_takeAll.js');

const _concatL = require('../lazy/_concatL.js');

function _unshift(iterator, args) {
  return _takeAll(_concatL(args, [iterator]));
}

module.exports = _curryRight(_unshift);