import releasePromise from '../internal/releasePromise.js';
import _curryRight from './_curryRight.js';
import _reduce from './_reduce.js';

function _groupBy(iterator, predicate) {
  return _reduce(iterator, (acc, curr) =>
    releasePromise(predicate(curr), prop => ((acc[prop] || (acc[prop] = [])).push(curr), acc)), {});
}

export default _curryRight(_groupBy);