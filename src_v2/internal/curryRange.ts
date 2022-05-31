function curryRange(range: Function) {
  return (...args: number[]) => {
    switch (args.length) {
      case 1:
        return range(0, args[0], 1);
      case 2:
        return range(args[0], args[1], 1);
      default:
        return range(args[0], args[1], args[2]);
    }
  };
}

export default curryRange;