import curryRight from './curryRight';
import takeAll from './takeAll';
import mapL from '@lazy/mapL';

interface Map {
  /**
   * The map method creates a new array populated with the results of calling a provided function on every element in the calling Iterable.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes, the returned value is added to new array.
   * @returns new array.
   */
  <T, U>(predicate: (value: T, index: number) => U): (iterable: Iterable<T | Promise<T>>) => U[] | Promise<U[]>;
  <T, U = any>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U): U[] | Promise<U[]>;
}

function _map<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U) {
  return takeAll(mapL(iterable, predicate));
}

const map: Map = curryRight(_map);

export default map;