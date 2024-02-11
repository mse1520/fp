import mapL from '@lazy/mapL';
import curryRight from './curryRight';
import flat from './flat';

interface FlatMapL {
  (predicate: (value: any, index: number) => any): (iterable: Iterable<any>) => any;
  (iterable: Iterable<any>, predicate: (value: any, index: number) => any): any;
}

/**
 * The flatMap method returns a new array formed by applying a given callback function to each element of the iterable, 
 * and then flattening the result by one level.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param predicate Function that produces an element of the new array.
 * @returns 
 */
const flatMap: FlatMapL = curryRight((iterable: Iterable<any>, predicate: (value: any, index: number) => any) => flat(mapL(iterable, predicate)));

export default flatMap;