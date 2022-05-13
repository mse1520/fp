import _curryRight from './_curryRight';
import _takeAll from './_takeAll';
import _filterL from '@lazy/_filterL';

interface Filter {
  <T>(predicate: (value: T, index: number) => any): (Iterator: Iterable<T | Promise<T>>) => (T | undefined)[] | Promise<(T | undefined)[]>;
  <T>(iterator: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): (T | undefined)[] | Promise<(T | undefined)[]>;
}

function filter<T>(iterator: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return _takeAll(_filterL(iterator, predicate));
}

const _filter: Filter = _curryRight(filter);

export default _filter;