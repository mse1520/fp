import _curryRight from '@basic/_curryRight';
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
  (length: number): <T>(iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, length: number): T[] | Promise<T[]>;
}

function _takeC<T>(iterable: Iterable<T | Promise<T>>, length: number) {
  return take([...iterable], length);
}

const takeC: TakeC = _curryRight(_takeC);

export default takeC;