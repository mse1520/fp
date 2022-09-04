import releasePromise from '@internal/releasePromise';
import _curryRight from '@basic/_curryRight';

interface MapL {
  <T, U>(predicate: (value: T, index: number) => U): (iterable: Iterable<T | Promise<T>>) => Generator<U | Promise<U>, void>;
  <T, U = any>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U): Generator<U | Promise<U>, void>;
}

function* mapL<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U) {
  let index = 0;
  for (const value of iterable) {
    yield releasePromise(value, predicate, index);
    index++;
  }
}

const _mapL: MapL = _curryRight(mapL);

export default _mapL;