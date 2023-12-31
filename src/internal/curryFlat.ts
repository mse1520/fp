const curryFlat = (func: (iterable: Iterable<any>, depth: number) => any) =>
  (...args: any[]) => {
    switch (args.length) {
      case 0:
        return (iter: Iterable<any>) => func(iter, 1);
      case 1:
        return typeof args[0] === 'number'
          ? (iter: Iterable<any>) => func(iter, args[0])
          : func(args[0], 1);
      default:
        return func(args[0], args[1]);
    }
  };

export default curryFlat;