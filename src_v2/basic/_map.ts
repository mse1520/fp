import _curryRight from './_curryRight';
import _takeAll from './_takeAll';
import _mapL from '@lazy/_mapL';

interface Map {
  <T, U>(predicate: (value: T, index: number) => U): (iterable: Iterable<T | Promise<T>>) => U[] | Promise<U[]>;
  <T, U = any>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U): U[] | Promise<U[]>;
}

function map<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U) {
  return _takeAll(_mapL(iterable, predicate));
}

const _map: Map = _curryRight(map);

export default _map;