import head from '@basic/head';
import toIterator from './toIterator';

type Predicate<T, R> = (acc: R, cur: T, idx: number) => R;
type Reduce = <T, R>(iterable: Iterable<T>, predicate: Predicate<T, R>, acc: R) => R;

const curryReduce = (reduce: Reduce) => (...args: any[]) => {
  switch (args.length) {
    case 1:
      return <T>(iterable: Iterable<T | Promise<T>>) => {
        const iter = toIterator(iterable);
        return reduce(iter, args[0], head(iter));
      };
    case 2:
      if (Symbol.iterator in args[0]) {
        const iter = toIterator(args[0]);
        return reduce(iter, args[1], head(iter));
      } else {
        return <T>(iterable: Iterable<T | Promise<T>>) => reduce(iterable, args[0], args[1]);
      }
    default:
      return reduce(args[0], args[1], args[2]);
  }
};

export default curryReduce;