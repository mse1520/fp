import head from '@basic/head';
import toIterator from './toIterator';

const curryReduce = (reduce: Function) => (...args: any[]) => {
  switch (args.length) {
    case 1:
      return (iterable: Iterable<any>) => {
        const iter = toIterator(iterable);
        return reduce(iter, args[0], head(iter));
      };
    case 2:
      if (Symbol.iterator in args[0]) {
        const iter = toIterator(args[0]);
        return reduce(iter, args[1], head(iter));
      }

      return (iterable: Iterable<any>) => reduce(iterable, args[0], args[1]);
    default:
      return reduce(args[0], args[1], args[2]);
  }
};

export default curryReduce;