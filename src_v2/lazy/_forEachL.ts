import _curryRight from '@basic/_curryRight';
import _mapL from './_mapL';

interface ForEachL {
  <T>(predicate: (value: T, index: number) => void): (Iterator: Iterable<T | Promise<T>>) => Generator<T | Promise<T | undefined>, void>;
  <T>(iterator: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void): Generator<T | Promise<T | undefined>, void>;
}

function forEachL<T>(iterator: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void) {
  return _mapL(iterator, (value, index) => (predicate(value, index), value));
}

const _forEachL: ForEachL = _curryRight(forEachL);

export default _forEachL;