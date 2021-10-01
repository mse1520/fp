const _curryRight = require('./_curryRight.js');

const _object = require('./_object.js');

const _mapL = require('../lazy/_mapL.js');

const _filterL = require('../lazy/_filterL.js');

function _pick(object, keys) {
  return _object(_filterL(_mapL(keys, key => [key, object[key]]), ([_, value]) => !(value === undefined)));
}

module.exports = _curryRight(_pick);