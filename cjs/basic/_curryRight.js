function _curryRight(func, arity = func.length) {
  return function curried(...args) {
    return args.length >= arity ? func(...args) : (...args2) => {
      while (arity - args.length < args2.length) args2.pop();

      return curried(...args2, ...args);
    };
  };
}

module.exports = _curryRight;