import reduce from './reduce';

/**
 * This function returns a function that receives the return value of the function as an argument of the next function, 
 * and this function returns the received argument value as it is.
 * @param func The first function.
 * @param funcs Listed functions.
 * @returns A function that receives the parameters of the first function.
 */
function tap(func: Function, ...funcs: Function[]) {
  return (arg: any) => (reduce(funcs, (acc, func) => func(acc), func(arg)), arg);
}

export default tap;