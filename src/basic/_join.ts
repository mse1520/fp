import curryRight from './curryRight';
import _reduce from './_reduce';

interface Join {
  (separator: string): <T>(iterable: Iterable<T | Promise<T>>) => string | Promise<string>;
  <T>(iterable: Iterable<T | Promise<T>>, separator: string): string | Promise<string>;
}

function join<T>(iterable: Iterable<T | Promise<T>>, separator: string) {
  return _reduce<T, string>(iterable, (acc, cur) => `${acc}${separator}${cur}`);
}

const _join: Join = curryRight(join);

export default _join;