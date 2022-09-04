import _head from '@basic/_head';
import toIterator from './toIterator';

type Predicate<T, R> = (acc: R, cur: T, idx: number) => R | Promise<R>;
type Result<R> = R | Promise<R> | Promise<R | Promise<R>>;
type Reduce = <T, R>(iterable: Iterable<T | Promise<T>>, predicate: Predicate<T, R>, acc: R | Promise<R>) => Result<R>;

function curryReduce(reduce: Reduce) {
  return (...args: any[]) => {
    switch (args.length) {
      case 1:
        return <T>(iterable: Iterable<T | Promise<T>>) => {
          const iter = toIterator(iterable);
          return reduce(iter, args[0], _head(iter));
        };
      case 2:
        if (Symbol.iterator in args[0]) {
          const iter = toIterator(args[0]);
          return reduce(iter, args[1], _head(iter));
        } else {
          return <T>(iterable: Iterable<T | Promise<T>>) => reduce(iterable, args[0], args[1]);
        }
      default:
        return reduce(args[0], args[1], args[2]);
    }
  };
}

export default curryReduce;