import _take from './_take';

function _takeAll<T>(iterable: Iterable<T | Promise<T>>) {
  return _take(iterable, Infinity);
}

export default _takeAll;