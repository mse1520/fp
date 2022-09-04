import _curryRight from '@basic/_curryRight';
import _mapL from '@lazy/_mapL';
import _takeAllC from './_takeAllC';

interface ForEachC {
  <T>(predicate: (value: T, index: number) => void): (iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void): T[] | Promise<T[]>;
}

function forEachC<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void) {
  return _takeAllC(
    _mapL(iterable, (value, index) => (predicate(value, index), value))
  );
}

const _forEachC: ForEachC = _curryRight(forEachC);

export default _forEachC;