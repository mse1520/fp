const _curryRight = require('./_curryRight.js');

const _join = require('./_join.js');

const _split = require('./_split.js');

function _replaceAll(str, separator, replacement) {
  return _join(_split(str, separator), replacement);
}

module.exports = _curryRight(_replaceAll);