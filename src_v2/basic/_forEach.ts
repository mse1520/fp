import _curryRight from './_curryRight';
import _takeAll from './_takeAll';
import _mapL from '@lazy/_mapL';

interface ForEach {
  <T>(predicate: (value: T, index: number) => void): (Iterator: Iterable<T | Promise<T>>) => (T | undefined)[] | Promise<(T | undefined)[]>;
  <T>(iterator: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void): (T | undefined)[] | Promise<(T | undefined)[]>;
}

function forEach<T>(iterator: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void) {
  return _takeAll(
    _mapL(iterator, (value, index) => (predicate(value, index), value))
  );
}

const _forEach: ForEach = _curryRight(forEach);

export default _forEach;