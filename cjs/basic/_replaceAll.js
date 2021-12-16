const _curryRight = require('./_curryRight.js');

const _reduce = require('./_reduce.js');

const _split = require('./_split.js');

function _replaceAll(str, pattern, replacement) {
  return _reduce(_split(str, pattern), (accumulate, value) => `${accumulate}${replacement}${value}`);
}

module.exports = _curryRight(_replaceAll);