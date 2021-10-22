const _curryRight = require('./_curryRight.js');

const _takeAll = require('./_takeAll.js');

const _concatL = require('../lazy/_concatL.js');

function _push(iterator, args) {
  return _takeAll(_concatL(iterator, [args]));
}

module.exports = _curryRight(_push);