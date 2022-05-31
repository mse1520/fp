import _curryRight from './_curryRight';
import _takeAll from './_takeAll';
import _mapL from '@lazy/_mapL';

interface Map {
  <T, R>(predicate: (value: T, index: number) => R): (iterable: Iterable<T | Promise<T>>) => (R | undefined)[] | Promise<(R | undefined)[]>;
  <T, R = any>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => R): (R | undefined)[] | Promise<(R | undefined)[]>;
}

function map<T, R>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => R) {
  return _takeAll(_mapL(iterable, predicate));
}

const _map: Map = _curryRight(map);

export default _map;