const _takeAll = require('./_takeAll.js');

const _keysL = require('../lazy/_keysL.js');

function _keys(object) {
  return _takeAll(_keysL(object));
}

module.exports = _keys;