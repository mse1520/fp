import _head from '@basic/_head';

function curryReduce(func: Function) {
  return (...args: any[]) => {
    switch (args.length) {
      case 1:
        return (iterable: any) => {
          const iter = iterable[Symbol.iterator]();
          return func(iter, args[0], _head(iter));
        };
      case 2:
        if (args[0][Symbol.iterator]) {
          const iter = args[0][Symbol.iterator]();
          return func(iter, args[1], _head(iter));
        } else {
          return (iter: any) => func(iter, args[0], args[1]);
        }
      case 3:
        return func(args[0], args[1], args[2]);
    }
  };
}

export default curryReduce;