import curryRight from './curryRight';
import takeL from '@lazy/takeL';

interface Take {
  /**
   * Creates a slice of array with n elements taken from the beginning.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param length The number of elements to take.
   * @returns Returns the slice of array.
   */
  (length: number): <T>(iterable: Iterable<T>) => T[];
  <T>(iterable: Iterable<T | Promise<T>>, length: number): T[];
}

const _take = <T>(iterable: Iterable<T>, length: number) => [...takeL(iterable, length)];

const take: Take = curryRight(_take);

export default take;