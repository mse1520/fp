import releasePromise from '@internal/releasePromise';
import _curryRight from '@basic/_curryRight';

interface MapL {
  <T, R>(predicate: (value: T, index: number) => R): (iterable: Iterable<T | Promise<T>>) => Generator<R | Promise<R>, void>;
  <T, R = any>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => R): Generator<R | Promise<R>, void>;
}

function* mapL<T, R>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => R) {
  let index = 0;
  for (const value of iterable) {
    yield releasePromise(value, predicate, index);
    index++;
  }
}

const _mapL: MapL = _curryRight(mapL);

export default _mapL;