import _curryRight from '@basic/_curryRight';
import _take from '@basic/_take';

interface TakeC {
  (length: number): <T>(iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, length: number): T[] | Promise<T[]>;
}

function takeC<T>(iterable: Iterable<T | Promise<T>>, length: number) {
  return _take([...iterable], length);
}

const _takeC: TakeC = _curryRight(takeC);

export default _takeC;