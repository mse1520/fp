import curryRight from './curryRight';
import takeAll from './takeAll';
import mapL from '@lazy/mapL';

interface Map {
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): any;
}

/**
 * The map method creates a new array populated with the results of calling a provided function on every element in the calling Iterable.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param predicate Function that is called for every element of iterable. Each time callbackFn executes, the returned value is added to new array.
 * @returns new array.
 */
const map: Map = curryRight((iterable: Iterable<any>, predicate: (value: any, index: number) => any) => takeAll(mapL(iterable, predicate)));

export default map;