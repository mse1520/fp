const _curryRight = require('./_curryRight.js');

const _takeAll = require('./_takeAll.js');

const _concatL = require('../lazy/_concatL.js');

function _unshift(iterator1, iterator2) {
  return _takeAll(_concatL(iterator2, iterator1));
}

module.exports = _curryRight(_unshift);