import _curryRight from '@basic/_curryRight';
import filterL from '@lazy/filterL';
import takeAllC from './takeAllC';

interface RejectC {
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => Generator<T | Promise<T>, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<T | Promise<T>, void>;
}

function rejectC<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return takeAllC(filterL(iterable, (value, index) => !predicate(value, index)));
}

const _rejectC: RejectC = _curryRight(rejectC);

export default _rejectC;