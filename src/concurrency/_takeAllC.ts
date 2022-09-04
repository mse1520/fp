import _take from '@basic/_take';

function _takeAllC<T>(iterable: Iterable<T | Promise<T>>) {
  return _take([...iterable], Infinity);
}

export default _takeAllC;