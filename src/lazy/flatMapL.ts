import _curryRight from '@basic/_curryRight';
import _flatL from './_flatL';
import mapL from './mapL';

interface FlatMapL {
  /**
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * The flatMapL method returns a new Generator formed by applying a given callback function to each element of the iterable, 
   * and then flattening the result by one level.
   * @param iterable conforms to the iterable protocol.
   * @param predicate Function that produces an element of a Generator.
   * @returns Generator
   */
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => Generator<any, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<any, void>;
}

function _flatMapL<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return _flatL(mapL(iterable, predicate));
}

const flatMapL: FlatMapL = _curryRight(_flatMapL);

export default flatMapL;