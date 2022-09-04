import _curryRight from '@basic/_curryRight';
import _mapL from './_mapL';

interface ForEachL {
  <T>(predicate: (value: T, index: number) => void): (iterable: Iterable<T | Promise<T>>) => Generator<T | Promise<T>, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void): Generator<T | Promise<T>, void>;
}

function forEachL<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void) {
  return _mapL(iterable, (value, index) => (predicate(value, index), value));
}

const _forEachL: ForEachL = _curryRight(forEachL);

export default _forEachL;