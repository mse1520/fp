import curryRight from './curryRight';
import reduce from './reduce';

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
const join: Join = curryRight(<T>(iterable: Iterable<T>, separator: string) => reduce(iterable, (acc, cur) => `${acc}${separator}${cur}`) || '');

export default join;