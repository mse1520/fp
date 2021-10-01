function _curryRight3To2(func) {
  return (first, ...args) => {
    return args.length < 1
      ? iterator => func(iterator, first, ...args)
      : typeof first === 'function'
        ? iterator => func(iterator, first, ...args)
        : func(first, ...args);
  };
}

export default _curryRight3To2;