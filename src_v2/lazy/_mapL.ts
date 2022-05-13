import releasePromise from '@internal/releasePromise';
import _curryRight from '@basic/_curryRight';

interface MapL {
  <T1, T2>(predicate: (value: T1, index: number) => T2): (Iterator: Iterable<T1 | Promise<T1>>) => Generator<T2 | Promise<undefined | T2>, void>;
  <T1, T2 = any>(iterator: Iterable<T1 | Promise<T1>>, predicate: (value: T1, index: number) => T2): Generator<T2 | Promise<undefined | T2>, void>;
}

function* mapL<T1, T2>(iterator: Iterable<T1 | Promise<T1>>, predicate: (value: T1, index: number) => T2) {
  let index = 0;
  for (const value of iterator) {
    yield releasePromise(value, predicate, index);
    index++;
  }
}

const _mapL: MapL = _curryRight(mapL);

export default _mapL;