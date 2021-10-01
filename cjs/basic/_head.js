const releasePromise = require('../internal/releasePromise.js');

const _take = require('./_take.js');

function _head(iterator) {
  return releasePromise(_take(iterator, 1), ([value]) => value);
}

module.exports = _head;