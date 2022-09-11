import _curryRight from './_curryRight';
import takeAll from './takeAll';
import _filterL from '@lazy/_filterL';

interface Filter {
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): T[] | Promise<T[]>;
}

function filter<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return takeAll(_filterL(iterable, predicate));
}

const _filter: Filter = _curryRight(filter);

export default _filter;