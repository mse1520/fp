function _curry(func, arity = func.length) {
  return function curried(...args) {
    return args.length >= arity ? func(...args) : (...args2) => curried(...args, ...args2);
  };
}

module.exports = _curry;