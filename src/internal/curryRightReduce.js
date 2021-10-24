function curryRightReduce(func) {
  return (first, ...args) =>
    args.length > 0
      ? first[Symbol.iterator]
        ? func(first, ...args)
        : iterator => func(iterator, first, ...args)
      : iterator => func(iterator, first, ...args)
}

export default curryRightReduce;