import curryFlat from '@internal/curryFlat';
import flatL from '@lazy/flatL';
import takeAll from './takeAll';

interface Flat {
  (): (iterable: Iterable<any>) => any;
  (depth: number): (iterable: Iterable<any>) => any;
  (iterable: Iterable<any>): any;
  (iterable: Iterable<any>, depth: number): any;
}

/**
 * The flat() method creates a new array with all sub-iterator concatenated into it recursively up to the specified depth.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param depth The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
 * @returns new array.
 */
const flat: Flat = curryFlat((iterable: Iterable<any>, depth: number) => takeAll(flatL(iterable, depth)));

export default flat;