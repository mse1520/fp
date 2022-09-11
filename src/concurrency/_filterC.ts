import _curryRight from '@basic/_curryRight';
import _filterL from '@lazy/_filterL';
import takeAllC from './takeAllC';

interface FilterC {
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): T[] | Promise<T[]>;
}

function filterC<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return takeAllC(_filterL(iterable, predicate));
}

const _filterC: FilterC = _curryRight(filterC);

export default _filterC;