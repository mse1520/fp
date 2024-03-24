import curryRight from '@basic/curryRight';
import reduceC from './reduceC';

interface Join {
  (separator: string): <T>(iterable: Iterable<T>) => string;
  <T>(iterable: Iterable<T>, separator: string): string;
}

/**
 * Converts all elements in iterable into a string separated by separator.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param separator separator
 * @returns new string
 */
const joinC: Join = curryRight(<T>(iterable: Iterable<T>, separator: string) => reduceC(iterable, (acc, cur) => `${acc}${separator}${cur}`) || '');

export default joinC;