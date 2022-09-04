function _curryRight(func: Function, arity = func.length) {
  const curried = (...args: any[]) => args.length >= arity
    ? func(...args)
    : (...args2: any[]) => {
      while (arity - args.length < args2.length) args2.pop();
      return curried(...args2, ...args);
    };

  return curried;
}

export default _curryRight;