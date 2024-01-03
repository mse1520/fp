import curryRight from '@basic/curryRight';
import flatL from './flatL';
import mapL from './mapL';

interface FlatMapL {
  /**
   * The flatMapL method returns a new Generator formed by applying a given callback function to each element of the iterable, 
   * and then flattening the result by one level.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate Function that produces an element of a Generator.
   * @returns Generator
   */
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => Generator<T, void>;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): Generator<T, void>;
}

const flatMapL: FlatMapL = curryRight((iterable: Iterable<any>, predicate: (value: any, index: number) => any) => flatL(mapL(iterable, predicate)));

export default flatMapL;