import releasePromise from '../internal/releasePromise.js';
import _curryRight from './_curryRight.js';
import _toArray from './_toArray.js';

function _includes(iterator, value) {
  return typeof iterator === 'string'
    ? iterator.includes(value)
    : releasePromise(_toArray(iterator), v => v.includes(value));
}

export default _curryRight(_includes);