import flatL from '@lazy/flatL';
import mapL from '@lazy/mapL';
import curryRight from './curryRight';
import takeAll from './takeAll';

interface FlatMapL {
  /**
   * The flatMap method returns a new array formed by applying a given callback function to each element of the iterable, 
   * and then flattening the result by one level.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate Function that produces an element of the new array.
   * @returns 
   */
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => any[] | Promise<any[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): any[] | Promise<any[]>;
}

function _flatMap<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return takeAll(flatL(mapL(iterable, predicate)));
}

const flatMap: FlatMapL = curryRight(_flatMap);

export default flatMap;