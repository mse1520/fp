/**
 * The curryRight function returns a new function that takes the remaining arguments based on the right argument. 
 * specifying arity sets the maximum number of times a new function is returned.
 * @param func The function to curry.
 * @param arity [arity = func.length] The arity of func.
 * @returns curried function.
 */
function curryRight(func: Function, arity = func.length) {
  const curried = (...args: any[]) => args.length >= arity
    ? func(...args)
    : (...args2: any[]) => {
      while (arity - args.length < args2.length) args2.pop();
      return curried(...args2, ...args);
    };

  return curried;
}

export default curryRight;