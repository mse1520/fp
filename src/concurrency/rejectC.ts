import curryRight from '@basic/curryRight';
import rejectL from '@lazy/rejectL';
import takeAllC from './takeAllC';

interface RejectC {
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): any;
}

/**
 * This method returns the elements of collection that predicate does not return truthy for.
 * Importantly, this is concurrency function.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param predicate the function invoked per iteration.
 * @returns Returns the new filtered array.
 */
const rejectC: RejectC = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) =>
  takeAllC(rejectL(iterable, predicate)));

export default rejectC;