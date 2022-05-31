function _curry(func: Function, arity = func.length) {
  const curried = (...args: any[]) => args.length >= arity
    ? func(...args)
    : (...args2: any[]) => curried(...args, ...args2);

  return curried;
}

export default _curry;