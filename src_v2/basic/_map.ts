import _curryRight from './_curryRight';
import _takeAll from './_takeAll';
import _mapL from '@lazy/_mapL';

interface Map {
  <T1, T2>(predicate: (value: T1, index: number) => T2): (Iterator: Iterable<T1 | Promise<T1>>) => (T2 | undefined)[] | Promise<(T2 | undefined)[]>;
  <T1, T2 = any>(iterator: Iterable<T1 | Promise<T1>>, predicate: (value: T1, index: number) => T2): (T2 | undefined)[] | Promise<(T2 | undefined)[]>;
}

function map<T1, T2>(iterator: Iterable<T1 | Promise<T1>>, predicate: (value: T1, index: number) => T2) {
  return _takeAll(_mapL<T1, T2>(iterator, predicate));
}

const _map: Map = _curryRight(map)

export default _map;