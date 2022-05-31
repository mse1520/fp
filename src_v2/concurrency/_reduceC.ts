import _reduce from '@basic/_reduce';
import curryReduce from '@internal/curryReduce';

interface ReduceC {
  <T, R>(predicate: (acc: R, cur: T, idx: number) => R | Promise<R>): (iterable: Iterable<T | Promise<T>>) => R | Promise<R>;
  <T, R>(predicate: (acc: R, cur: T, idx: number) => R | Promise<R>, acc: R | Promise<R>): (iterable: Iterable<T | Promise<T>>) => R | Promise<R>;
  <T, R = any>(iterable: Iterable<T | Promise<T>>, predicate: (acc: R, cur: T, idx: number) => R | Promise<R>): R | Promise<R>;
  <T, R>(iterable: Iterable<T | Promise<T>>, predicate: (acc: R, cur: T, idx: number) => R | Promise<R>, acc: R | Promise<R>): R | Promise<R>;
}

function reduceC<T, R>(iterable: Iterable<T | Promise<T>>, predicate: (acc: R, cur: T, idx: number) => R | Promise<R>, acc: R | Promise<R>) {
  return _reduce([...iterable], predicate, acc);
}

const _reduceC: ReduceC = curryReduce(reduceC);

export default _reduceC;