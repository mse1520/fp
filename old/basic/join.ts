import curryRight from './curryRight';
import reduce from './reduce';

interface Join {
  /**
   * Converts all elements in iterable into a string separated by separator.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param separator separator
   * @returns new string
   */
  (separator: string): <T>(iterable: Iterable<T | Promise<T>>) => string | Promise<string>;
  <T>(iterable: Iterable<T | Promise<T>>, separator: string): string | Promise<string>;
}

function _join<T>(iterable: Iterable<T | Promise<T>>, separator: string) {
  return reduce<T, string>(iterable, (acc, cur) => `${acc}${separator}${cur}`);
}

const join: Join = curryRight(_join);

export default join;