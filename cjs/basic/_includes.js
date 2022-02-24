const releasePromise = require('../internal/releasePromise.js');

const _curryRight = require('./_curryRight.js');

const _toArray = require('./_toArray.js');

function _includes(iterator, value) {
  return typeof iterator === 'string' ? iterator.includes(value) : releasePromise(_toArray(iterator), v => v.includes(value));
}

module.exports = _curryRight(_includes);