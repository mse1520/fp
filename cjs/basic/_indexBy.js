const _curryRight = require('./_curryRight.js');

const _reduce = require('./_reduce.js');

function _indexBy(iterator, predicate) {
  return _reduce(iterator, (object, value, index) => (object[predicate(value, index)] = value, object), {});
}

module.exports = _curryRight(_indexBy);