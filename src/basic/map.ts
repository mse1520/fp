import _curryRight from './_curryRight';
import _takeAll from './_takeAll';
import mapL from '@lazy/mapL';

interface Map {
  /**
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * The map method creates a new array populated with the results of calling a provided function on every element in the calling Iterable.
   * @param iterable conforms to the iterable protocol.
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes, the returned value is added to new array.
   * @returns new array.
   */
  <T, U>(predicate: (value: T, index: number) => U): (iterable: Iterable<T | Promise<T>>) => U[] | Promise<U[]>;
  <T, U = any>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U): U[] | Promise<U[]>;
}

function _map<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U) {
  return _takeAll(mapL(iterable, predicate));
}

const map: Map = _curryRight(_map);

export default map;