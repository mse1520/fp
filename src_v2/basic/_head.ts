import releasePromise from '@internal/releasePromise';
import _take from './_take';

function _head<T>(iterable: Iterable<T | Promise<T>>) {
  return releasePromise(_take(iterable, 1), ([value]) => value);
}

export default _head;