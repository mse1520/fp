import flatL from './flatL';

/**
 * Recursively flattens Iterable.
 * @param iterable conforms to the iterable protocol.
 * @returns the new flattened Generator.
 */
function deepFlatL<T extends Iterable<any>>(iterable: T) {
  return flatL(iterable, Infinity);
}

export default deepFlatL;