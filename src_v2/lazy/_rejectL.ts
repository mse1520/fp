import _curryRight from '@basic/_curryRight';
import _filterL from './_filterL';

interface RejectL {
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => Generator<T | Promise<T>, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<T | Promise<T>, void>;
}

function rejectL<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return _filterL(iterable, (value, index) => !predicate(value, index));
}

const _rejectL: RejectL = _curryRight(rejectL);

export default _rejectL;