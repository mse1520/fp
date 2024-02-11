import curryRight from '@basic/curryRight';
import take from '@basic/take';

interface TakeC {
  (length: number): (iterable: Iterable<any>) => any;
  (iterable: Iterable<any>, length: number): any;
}

/**
 * Creates a slice of array with n elements taken from the beginning.
 * Importantly, this is concurrency function.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param length The number of elements to take.
 * @returns Returns the slice of array.
 */
const takeC: TakeC = curryRight((iterable: Iterable<any>, length: number) => take([...iterable], length));

export default takeC;