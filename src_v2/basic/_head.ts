import releasePromise from '@internal/releasePromise';
import _take from './_take';

function _head<T>(iterable: Iterable<T | Promise<T>>) {
  return releasePromise(_take(iterable, 1), value => {
    const length = value.length - 1;
    if (length < 0) throw new Error('There is no data in the iterator!!');

    return value[0];
  });
}

export default _head;