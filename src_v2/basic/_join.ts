import _curryRight from './_curryRight';
import _reduce from './_reduce';

interface Join {
  <T>(iterable: Iterable<T | Promise<T>>, separator: string): string | Promise<string>;
}

function join<T>(iterable: Iterable<T | Promise<T>>, separator: string) {
  return _reduce<T, string>(iterable, (acc, cur) => `${acc}${separator}${cur}`);
}

const _join: Join = _curryRight(join);

export default join;