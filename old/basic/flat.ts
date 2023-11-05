import curryFlat from '@internal/curryFlat';
import flatL from '@lazy/flatL';
import takeAll from './takeAll';

interface Flat {
  (): <T extends Iterable<any>>(iterable: T) => any[] | Promise<any[]>;
  (depth: number): <T extends Iterable<any>>(iterable: T) => any[] | Promise<any[]>;
  <T extends Iterable<any>>(iterable: T): any[] | Promise<any[]>;
  <T extends Iterable<any>>(iterable: T, depth: number): any[] | Promise<any[]>;
}

/**
 * The flat() method creates a new array with all sub-iterator concatenated into it recursively up to the specified depth.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param depth The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
 * @returns new array.
 */
function _flat<T extends Iterable<any>>(iterable: T, depth: number) {
  return takeAll(flatL(iterable, depth));
}

const flat: Flat = curryFlat(_flat);

export default flat;