import _flatL from '@lazy/_flatL';
import mapL from '@lazy/mapL';
import _curryRight from './_curryRight';
import _takeAll from './_takeAll';

interface FlatMapL {
  /**
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * The flatMap method returns a new array formed by applying a given callback function to each element of the iterable, 
   * and then flattening the result by one level.
   * @param iterable conforms to the iterable protocol.
   * @param predicate Function that produces an element of the new array.
   * @returns 
   */
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => any[] | Promise<any[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): any[] | Promise<any[]>;
}

function _flatMap<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return _takeAll(_flatL(mapL(iterable, predicate)));
}

const flatMap: FlatMapL = _curryRight(_flatMap);

export default flatMap;