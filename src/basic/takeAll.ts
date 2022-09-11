import _take from './take';

/**
 * Creates a new array with all elements taken from the beginning.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @returns new array
 */
function _takeAll<T>(iterable: Iterable<T | Promise<T>>) {
  return _take(iterable, Infinity);
}

export default _takeAll;