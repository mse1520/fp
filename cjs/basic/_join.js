const _curryRight = require('./_curryRight.js');

const _reduce = require('./_reduce.js');

function _join(iterator, separator) {
  return _reduce(iterator, (accumulate, value) => `${accumulate}${separator}${value}`);
}

module.exports = _curryRight(_join);