function _3To2CurryRight(func) {
  return (first, ...args) => {
    return args.length < 1
      ? iterator => func(iterator, first, ...args)
      : typeof first === 'function'
        ? iterator => func(iterator, first, ...args)
        : func(first, ...args);
  };
}

export default _3To2CurryRight;