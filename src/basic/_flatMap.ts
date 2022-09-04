import _flatL from '@lazy/_flatL';
import _mapL from '@lazy/_mapL';
import _curryRight from './_curryRight';
import _takeAll from './_takeAll';

interface FlatMapL {
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => any[] | Promise<any[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): any[] | Promise<any[]>;
}

function flatMap<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return _takeAll(_flatL(_mapL(iterable, predicate)));
}

const _flatMap: FlatMapL = _curryRight(flatMap);

export default _flatMap;