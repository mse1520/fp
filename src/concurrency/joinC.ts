import curryRight from '@basic/curryRight';
import reduceC from './reduceC';

interface Join {
  /**
   * Converts all elements in iterable into a string separated by separator.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param separator separator
   * @returns new string
   */
  (separator: string): <T>(iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, separator: string): any;
}

const joinC: Join = curryRight(<T>(iterable: Iterable<T>, separator: string) => reduceC(iterable, (acc, cur) => `${acc}${separator}${cur}`));

export default joinC;