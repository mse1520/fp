import _reduce from '@basic/_reduce';
import curryReduce from '@internal/curryReduce';

interface ReduceC {
  <T, U>(predicate: (acc: U, cur: T, idx: number) => U | Promise<U>): (iterable: Iterable<T | Promise<T>>) => U | Promise<U>;
  <T, U>(predicate: (acc: U, cur: T, idx: number) => U | Promise<U>, acc: U | Promise<U>): (iterable: Iterable<T | Promise<T>>) => U | Promise<U>;
  <T, U = any>(iterable: Iterable<T | Promise<T>>, predicate: (acc: U, cur: T, idx: number) => U | Promise<U>): U | Promise<U>;
  <T, U>(iterable: Iterable<T | Promise<T>>, predicate: (acc: U, cur: T, idx: number) => U | Promise<U>, acc: U | Promise<U>): U | Promise<U>;
}

function reduceC<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (acc: U, cur: T, idx: number) => U | Promise<U>, acc: U | Promise<U>) {
  return _reduce([...iterable], predicate, acc);
}

const _reduceC: ReduceC = curryReduce(reduceC);

export default _reduceC;