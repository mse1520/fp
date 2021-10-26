const releasePromise = require('../internal/releasePromise.js');

const _curryRight = require('./_curryRight.js');

const _reduce = require('./_reduce.js');

function _groupBy(iterator, predicate) {
  return _reduce(iterator, (acc, curr) => releasePromise(predicate(curr), prop => ((acc[prop] || (acc[prop] = [])).push(curr), acc)), {});
}

module.exports = _curryRight(_groupBy);