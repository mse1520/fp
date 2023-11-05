import flatL from '@lazy/flatL';
import takeAll from './takeAll';

/**
 * Recursively flattens array.
 * @param iterable conforms to the iterable protocol.
 * @returns the new flattened array.
 */
function deepFlat<T extends Iterable<any>>(iterable: T) {
  return takeAll(flatL(iterable, Infinity));
}

export default deepFlat;