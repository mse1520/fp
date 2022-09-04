import isString from '@internal/isString';
import _reduce from './_reduce';

function isArray<T>(target: Iterable<T>): target is Array<T> {
  return Array.isArray(target);
}

function _last<T>(iterable: Iterable<T | Promise<T>>) {
  if (isArray(iterable) || isString(iterable)) {
    const length = iterable.length - 1;
    if (length < 0) throw new Error('There is no data in the iterator!!');

    return iterable[length] as T | Promise<T>;
  }

  return _reduce(iterable, (_: T, cur) => cur);
}

export default _last;