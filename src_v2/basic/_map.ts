import _curryRight from './_curryRight';
import _takeAll from './_takeAll';
import _mapL from '@lazy/_mapL';

interface Map {
  <T, U>(predicate: (value: T, index: number) => U): (Iterator: Iterable<T | Promise<T>>) => (U | undefined)[] | Promise<(U | undefined)[]>;
  <T, U = any>(iterator: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U): (U | undefined)[] | Promise<(U | undefined)[]>;
}

function map<T, U>(iterator: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U) {
  return _takeAll(_mapL<T, U>(iterator, predicate));
}

const _map: Map = _curryRight(map)

export default _map;