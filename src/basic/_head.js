import releasePromise from '../internal/releasePromise.js';
import _take from './_take.js';

function _head(iterator) {
  return releasePromise(_take(iterator, 1), ([value]) => value);
}

export default _head;