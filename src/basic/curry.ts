/**
 * Creates a function that accepts arguments of func and either invokes func returning its result, 
 * if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on.
 * @param func The function to curry.
 * @param arity [arity = func.length] The arity of func.
 * @returns curried function.
 */
const curry = (func: Function, arity = func.length) => {
  const curried = (...args: any[]) => args.length >= arity
    ? func(...args)
    : (...args2: any[]) => curried(...args, ...args2);

  return curried;
}

export default curry;