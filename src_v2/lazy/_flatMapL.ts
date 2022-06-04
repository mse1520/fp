import _curryRight from '@basic/_curryRight';
import _flatL from './_flatL';
import _mapL from './_mapL';

interface FlatMapL {
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => Generator<any, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<any, void>;
}

function flatMapL<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return _flatL(_mapL(iterable, predicate));
}

const _flatMapL: FlatMapL = _curryRight(flatMapL);

export default _flatMapL;