import isString from '@internal/isString';
import reduce from './reduce';

function isArray<T>(target: Iterable<T>): target is Array<T> {
  return Array.isArray(target);
}

/**
 * Gets the last element of iterable.
 * @param iterable conforms to the iterable protocol.
 * @returns last element of iterable.
 */
function last<T>(iterable: Iterable<T | Promise<T>>) {
  if (isArray(iterable) || isString(iterable)) {
    const index = iterable.length - 1;
    if (index < 0) throw new Error('There is no data in the iterator!!');

    return iterable[index] as T | Promise<T>;
  }

  return reduce(iterable, (_: T, cur) => cur);
}

export default last;