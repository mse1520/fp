import _curryRight from '@basic/_curryRight';
import _filterL from '@lazy/_filterL';
import takeAll from './takeAll';

interface Reject {
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => Generator<T | Promise<T>, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<T | Promise<T>, void>;
}

function reject<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return takeAll(_filterL(iterable, (value, index) => !predicate(value, index)));
}

const _reject: Reject = _curryRight(reject);

export default _reject;