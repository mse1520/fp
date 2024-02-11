import curryRight from '@basic/curryRight';
import rejectL from '@lazy/rejectL';
import takeAll from './takeAll';

interface Reject {
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): any;
}

/**
 * This method returns the elements of collection that predicate does not return truthy for.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param predicate the function invoked per iteration.
 * @returns Returns the new filtered array.
 */
const reject: Reject = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) =>
  takeAll(rejectL(iterable, predicate)));

export default reject;