import _take from './_take';

function _takeAll<T>(iterator: Iterable<T | Promise<T>>) {
  return _take(iterator, Infinity);
}

export default _takeAll;