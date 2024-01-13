import isString from './isString';
import isArray from './isArray';
import reduce from './reduce';

/**
 * Gets the last element of iterable.
 * @param iterable conforms to the iterable protocol.
 * @returns last element of iterable.
 */
const last = (iterable: Iterable<any>) => {
  if (isArray(iterable) || isString(iterable)) {
    const index = iterable.length - 1;
    return index < 0 ? undefined : iterable[index];
  }

  return reduce(iterable, (_, cur) => cur);
};

export default last;