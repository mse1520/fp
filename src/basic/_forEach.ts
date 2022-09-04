import _curryRight from './_curryRight';
import _takeAll from './_takeAll';
import _mapL from '@lazy/_mapL';

interface ForEach {
  <T>(predicate: (value: T, index: number) => void): (iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void): T[] | Promise<T[]>;
}

function forEach<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void) {
  return _takeAll(
    _mapL(iterable, (value, index) => (predicate(value, index), value))
  );
}

const _forEach: ForEach = _curryRight(forEach);

export default _forEach;