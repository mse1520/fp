import curryRight from '@basic/curryRight';
import take from '@basic/take';

interface TakeC {
  /**
   * Creates a slice of array with n elements taken from the beginning.
   * Importantly, this is concurrency function.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param length The number of elements to take.
   * @returns Returns the slice of array.
   */
  (length: number): <T>(iterable: Iterable<T>) => T[];
  <T>(iterable: Iterable<T>, length: number): T[];
}

const _takeC = <T>(iterable: Iterable<T>, length: number) => take([...iterable], length);

const takeC: TakeC = curryRight(_takeC);

export default takeC;