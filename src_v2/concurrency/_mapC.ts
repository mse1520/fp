import _curryRight from '@basic/_curryRight';
import _mapL from '@lazy/_mapL';
import _takeAllC from './_takeAllC';

interface mapC {
  <T, R>(predicate: (value: T, index: number) => R): (iterable: Iterable<T | Promise<T>>) => R[] | Promise<R[]>;
  <T, R>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => R): R[] | Promise<R[]>;
}

function mapC<T, R>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => R) {
  return _takeAllC(_mapL(iterable, predicate));
}

const _mapC: mapC = _curryRight(mapC);

export default _mapC;