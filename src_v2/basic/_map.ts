import _curryRight from './_curryRight';
import _takeAll from './_takeAll';
import _mapL from '@lazy/_mapL';

interface Map {
  <T, U>(predicate: (value: T, index: number) => U): (iterable: Iterable<T | Promise<T>>) => (U | undefined)[] | Promise<(U | undefined)[]>;
  <T, U = any>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U): (U | undefined)[] | Promise<(U | undefined)[]>;
}

function map<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U) {
  return _takeAll(_mapL<T, U>(iterable, predicate));
}

const _map: Map = _curryRight(map);

export default _map;