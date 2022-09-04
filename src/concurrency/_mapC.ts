import _curryRight from '@basic/_curryRight';
import _mapL from '@lazy/_mapL';
import _takeAllC from './_takeAllC';

interface mapC {
  <T, U>(predicate: (value: T, index: number) => U): (iterable: Iterable<T | Promise<T>>) => U[] | Promise<U[]>;
  <T, U>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U): U[] | Promise<U[]>;
}

function mapC<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U) {
  return _takeAllC(_mapL(iterable, predicate));
}

const _mapC: mapC = _curryRight(mapC);

export default _mapC;